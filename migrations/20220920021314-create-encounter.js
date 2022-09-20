'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('encounters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      partnerName: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      partnerId: {
        type: Sequelize.INTEGER
      },
      protection: {
        type: Sequelize.STRING
      },
      penetration: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('encounters');
  }
};