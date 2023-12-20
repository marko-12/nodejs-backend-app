export default (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  Category.associate = function (models) {
    Category.hasMany(models.Product, { foreignKey: "category_id" });
  };
  (async () => {
    await sequelize.sync();
  })();
  return Category;
};
