'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    
    userid: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};