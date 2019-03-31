'use strict';
module.exports = (sequelize, DataTypes) => {
  const trainer = sequelize.define('trainer', {
    firstName: DataTypes.STRING,
    email:DataTypes.STRING,
    mobile:DataTypes.INTEGER,
    departmentId:DataTypes.INTEGER
  }, {});
  trainer.associate = function(models) {
    // associations can be defined here
  };
  return trainer;
};