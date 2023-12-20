export default (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    postal_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    delivered: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    delivered_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    paid: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    paid_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    pay_before_shipping: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });
  Order.associate = function (models) {
    Order.belongsTo(models.User, { foreignKey: "user_id" });
    Order.belongsToMany(models.Product, {
      through: OrderItems,
      timestamps: true,
      foreignKey: "order_id",
    });
  };
  (async () => {
    await sequelize.sync();
  })();
  return Order;
};
