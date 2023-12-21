import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Order extends Model {}

  Order.init(
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      delivered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      delivered_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      paid_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      pay_before_shipping: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
    }
  );

  Order.associate = function (models) {
    Order.belongsTo(models.User, { foreignKey: "user_id" });
    Order.belongsToMany(models.Product, {
      through: "OrderItems",
      timestamps: true,
      foreignKey: "order_id",
    });
  };

  return Order;
};
