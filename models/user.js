module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: 'UserId',
      onDelete: "cascade",
      allowNull: false,
    });
    User.hasOne(models.Profile, {
      foreignKey: 'UserId',
      onDelete: "cascade",
      allowNull: false,
    });
  };
  return User;
};
