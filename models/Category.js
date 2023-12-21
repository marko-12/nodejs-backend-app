import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Category extends Model {}

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
    }
  );

  Category.associate = function (models) {
    Category.hasMany(models.User, { foreignKey: "category_id" });
  };

  return Category;
};
