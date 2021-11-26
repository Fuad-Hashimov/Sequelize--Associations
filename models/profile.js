"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.associate = (models) => {
        Profile.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    }
  }
  Profile.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
