export default (sequelize, Sequelize) => {
  const OrderItem = sequelize.define("order_item", {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  OrderItem.associate = function (models) {
    OrderItem.belongsTo(models.Product, { foreignKey: "product_id" });
    OrderItem.belongsTo(models.Order, { foreignKey: "order_id" });
  };
  (async () => {
    await sequelize.sync();
  })();
  return Order;
};
