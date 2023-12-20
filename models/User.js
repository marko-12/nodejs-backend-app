import { Sequelize, DataTypes, Model } from "sequelize";

export default (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  User.associate = function (models) {
    User.hasMany(models.Product, { foreignKey: "user_id" });
    User.hasMany(models.Order, { foreignKey: "user_id" });
    User.hasMany(models.Review, { foreignKey: "user_id" });
  };
  (async () => {
    await sequelize.sync();
  })();
  return User;
};
