// Database
const db = require('../driven-adapters/sequelize');

// Repository
const MovieRepository = require('../../domain/repositories/movie_repository');

// Models
const Movie = require('../../domain/models/movie');
const MovieGenre = require('../../domain/models/movie_genre');
const Inventory = require('../../domain/models/inventory');

// Helpers and utils
const { iterateObject, isEmpty } = require('../helpers/util/objects');

const filterAttributes = (attributes, repository) => {
  const { Op } = db;
  const attributesToFilter = {};
  iterateObject((value, key) => {
    if (key === 'genre') {
      const newFilter = {
        where: { description: { [Op.substring]: `${value}` } },
        required: true
      };
      repository.include[0].include[0] = { ...repository.include[0].include[0], ...newFilter };
      repository.include[0] = { ...repository.include[0], required: true };
    } else if (key === 'rating') {
      const newFilter = {
        where: { code: { [Op.eq]: `${value}` } },
        required: true
      };
      repository.include[1] = { ...repository.include[1], ...newFilter };
    } else if (key === 'release_date') {
      attributesToFilter[key] = {
        [Op.gte]: new Date(value),
        [Op.lte]: new Date(value).setHours(23, 59, 59)
      };
    } else {
      attributesToFilter[key] = value;
    }
  }, attributes);
  if (!isEmpty(attributesToFilter)) return { [Op.and]: attributesToFilter };
  return attributesToFilter;
};

const cleanInclude = repository => {
  delete repository.include[0].include[0].where;
  delete repository.include[0].required;
  delete repository.include[1].where;
};

module.exports = class extends MovieRepository {
  constructor() {
    super();
    this.Movie = db.movies;
    this.Genre = db.genders;
    this.MovieGenre = db.movie_genre;
    this.Inventory = db.inventory;
    this.FilmRating = db.film_rating;

    this.include = [
      {
        model: this.MovieGenre,
        as: 'movie_genre',
        attributes: ['id'],
        include: [
          {
            model: this.Genre,
            as: 'genre',
            attributes: ['id', 'description']
          }
        ]
      },
      {
        model: this.FilmRating,
        as: 'film_rating',
        attributes: ['id', 'name', 'code']
      },
      {
        model: this.Inventory,
        as: 'inventory'
      }
    ];
  }

  async persist(data) {
    const transaction = await db.sequelize.transaction();

    try {
      const movieExists = await this.Movie.findOne({ where: { name: data.name } });

      if (movieExists) {
        return Promise.reject(new Error(`Movie with name ${data.name} already exists`));
      }

      const newMovie = new Movie({
        name: data.name,
        release_date: data.release_date,
        film_rating_id: data.film_rating_id
      });
      const movie = await this.Movie.create(newMovie, { transaction });

      const movieGendersBulk = data.genders.map(
        movieGenre => new MovieGenre({ movie_id: movie.id, genre_id: movieGenre })
      );
      await this.MovieGenre.bulkCreate(movieGendersBulk, { transaction });

      const newInventory = new Inventory({
        amount: data.amount,
        price: data.price,
        movie_id: movie.id
      });
      await this.Inventory.create(newInventory, { transaction });

      await transaction.commit();

      const movieData = await this.getByID(movie.id);

      return Promise.resolve(movieData);
    } catch (error) {
      await transaction.rollback();
      return Promise.reject(new Error(error.message));
    }
  }

  async getAll(query) {
    const attributesToFilter =
      Object.keys(query).length > 0 ? filterAttributes(query, this) : cleanInclude(this);
    const params = {
      ...attributesToFilter
    };
    const movies = await this.Movie.findAll({
      where: params,
      order: [['name', 'ASC']],
      include: this.include
    });
    const total = movies.length;

    return Promise.resolve({ total, data: movies });
  }

  async getByID(id) {
    cleanInclude(this);
    const movie = await this.Movie.findOne({
      where: { id },
      limit: 1,
      include: this.include
    });
    return Promise.resolve(movie);
  }

  async update(data) {
    const transaction = await db.sequelize.transaction();

    try {
      const movieData = new Movie({
        name: data.name,
        release_date: data.release_date,
        film_rating_id: data.film_rating_id
      });
      let movie = await this.getByID(data.id);

      Object.assign(movie, movieData);
      movie = await movie.save({ transaction });

      const inventoryData = new Inventory({
        amount: data.amount,
        price: data.price
      });
      await this.Inventory.update({ ...inventoryData }, { where: { movie_id: data.id } });

      await this.MovieGenre.destroy({ where: { movie_id: data.id }, transaction });

      const movieGendersBulk = data.genders.map(
        movieGenre => new MovieGenre({ movie_id: data.id, genre_id: movieGenre })
      );
      await this.MovieGenre.bulkCreate(movieGendersBulk, { transaction });

      await transaction.commit();

      const movieDataUpdated = await this.getByID(movie.id);

      return Promise.resolve(movieDataUpdated);
    } catch (error) {
      await transaction.rollback();
      return Promise.reject(new Error(error.message));
    }
  }

  async delete(id) {
    const transaction = await db.sequelize.transaction();

    try {
      await this.Inventory.destroy({
        where: { movie_id: id },
        transaction
      });

      const isDeleted = await this.Movie.destroy({
        where: { id },
        transaction
      });

      await transaction.commit();
      return isDeleted;
    } catch (error) {
      await transaction.rollback();
      return Promise.reject(new Error(error.message));
    }
  }
};
