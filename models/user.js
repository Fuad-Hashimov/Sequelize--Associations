"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.associate = (models) => {
        User.hasMany(models.Post, {
          onDelete: "cascade",
        });
        User.hasOne(models.Profile, {
          onDelete: "cascade",
        });
      };
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
