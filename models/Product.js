export default (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    count_in_stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rating: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    num_of_reviews: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  Product.associate = function (models) {
    Product.belongsTo(models.User, { foreignKey: "product_id" });
    Product.hasMany(models.Review, { foreignKey: "user_id" });
    Product.belongsTo(models.Category, { foreignKey: "category_id" });
    Product.belongsToMany(models.Order, {
      through: OrderItems,
      timestamps: true,
      foreignKey: "product_id",
    });
  };
  (async () => {
    await sequelize.sync();
  })();
  return Product;
};
