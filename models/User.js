import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Product, { foreignKey: "user_id" });
    User.hasMany(models.Order, { foreignKey: "user_id" });
    User.hasMany(models.Review, { foreignKey: "user_id" });
  };

  // Automatically synchronize the database when the model is imported
  // This is typically used for development and testing purposes
  // (async () => {
  //   await sequelize.sync();
  // })();
  sequelize.sync();

  return User;
};
