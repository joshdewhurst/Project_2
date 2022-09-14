'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class partners_encounters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  partners_encounters.init({
    partnerId: DataTypes.INTEGER,
    encounterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'partners_encounters',
  });
  return partners_encounters;
};