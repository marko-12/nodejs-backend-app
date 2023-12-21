import { DataTypes, Model } from "sequelize";

export default (sequelize, Sequelize) => {
  class OrderItem extends Model {}

  OrderItem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "OrderItems",
      tableName: "order_items",
    }
  );

  // (async () => {
  //   await sequelize.sync();
  // })();

  return OrderItem;
};
