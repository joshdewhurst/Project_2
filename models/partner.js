'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class partner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.partner.belongsTo(models.user)
      models.partner.belongsToMany(models.encounter, { through: "partners_encounters"})
    }
  }
  partner.init({
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'partner',
  });
  return partner;
};