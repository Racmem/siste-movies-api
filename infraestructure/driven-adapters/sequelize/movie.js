module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'movies',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: 'movies',
      timestamps: true
    }
  );
  Movie.associate = models => {
    Movie.hasMany(models.movie_genre, { as: 'movie_genre', foreignKey: 'movie_id', onDelete: 'cascade' });
    Movie.hasMany(models.inventory, { as: 'inventory', foreignKey: 'movie_id', onDelete: 'cascade' });
    Movie.belongsTo(models.film_rating, { as: 'film_rating', foreignKey: 'film_rating_id' });
  };
  return Movie;
};
