import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Review extends Model {}

  Review.init(
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "reviews",
    }
  );

  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "user_id" });
    Review.belongsTo(models.Product, { foreignKey: "product_id" });
  };

  return Review;
};
