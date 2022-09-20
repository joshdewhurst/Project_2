'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class encounter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.encounter.belongsTo(models.user)
      models.encounter.belongsTo(models.partner)
    }
  }
  encounter.init({
    date: DataTypes.STRING,
    note: DataTypes.STRING,
    partnerName: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    partnerId: DataTypes.INTEGER,
    protection: DataTypes.STRING,
    penetration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'encounter',
  });
  return encounter;
};