import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Product extends Model {}

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      count_in_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      num_of_reviews: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );

  Product.associate = function (models) {
    Product.belongsTo(models.User, { foreignKey: "user_id" });
    Product.hasMany(models.Review, { foreignKey: "product_id" });
    Product.belongsTo(models.Category, { foreignKey: "category_id" });
    Product.belongsToMany(models.Order, {
      through: "OrderItems",
      timestamps: true,
      foreignKey: "product_id",
    });
  };

  return Product;
};
