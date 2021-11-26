"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.associate = (models) => {
        Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    }
  }
  Post.init(
    {
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
