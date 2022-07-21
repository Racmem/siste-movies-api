module.exports = (sequelize, DataTypes) => {
  const FilmRating = sequelize.define(
    'film_rating',
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
      code: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'film_rating',
      timestamps: true
    }
  );
  FilmRating.associate = models => {
    FilmRating.hasMany(models.movies, { as: 'movies', foreignKey: 'film_rating_id' });
  };
  return FilmRating;
};
