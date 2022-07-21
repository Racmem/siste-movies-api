module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define(
    'movie_genre',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    },
    {
      tableName: 'movie_genre',
      timestamps: true
    }
  );
  MovieGenre.associate = models => {
    MovieGenre.belongsTo(models.genders, { as: 'genre', foreignKey: 'genre_id' });
    MovieGenre.belongsTo(models.movies, { as: 'movies', foreignKey: 'movie_id' });
  };
  return MovieGenre;
};
