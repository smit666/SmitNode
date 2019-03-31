'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  department.associate = function(models) {
    // associations can be defined here
    //department.hasMany(models.employee)
    department.belongsTo(models.employee, {
      foreignKey : 'id',
      targetKey: 'departmentId'
    });
    
    
  };
  return department;
};