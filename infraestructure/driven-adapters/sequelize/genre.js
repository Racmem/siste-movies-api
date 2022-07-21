module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'genders',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'genders',
      timestamps: true
    }
  );
  Genre.associate = models => {
    Genre.hasMany(models.movie_genre, { as: 'genre_movies', foreignKey: 'genre_id', onDelete: 'cascade' });
  };
  return Genre;
};
