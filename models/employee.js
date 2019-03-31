'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    departmentId:DataTypes.INTEGER

  }, {});
  employee.associate = function(models) {
    // associations can be defined here
    employee.hasMany(models.department, {
      foreignKey : 'id',
      sourceKey: 'departmentId'
  });
    // employee.belongsTo(models.department, {
    //   foreignKey: 'departmentId',
    //   as: 'depDetails'
    // });
  };
  return employee;
};