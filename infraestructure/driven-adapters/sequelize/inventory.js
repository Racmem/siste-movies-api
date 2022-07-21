module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define(
    'inventory',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      tableName: 'inventory',
      timestamps: true
    }
  );
  Inventory.associate = models => {
    Inventory.belongsTo(models.movies, { as: 'movies', foreignKey: 'movie_id' });
  };
  return Inventory;
};
