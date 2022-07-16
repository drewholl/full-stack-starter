'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ParkingLots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name: {
        type: Sequelize.STRING,
      },
      Address: {
        type: Sequelize.STRING,
      },
      Phone_Number: {
        type: Sequelize.STRING,
      },
      Type: {
        type: Sequelize.STRING,
      },
      Hours_Open: {
        type: Sequelize.STRING,
      },
      Hourly_Rate: {
        type: Sequelize.STRING,
      },
      Pictures: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ParkingLots');
  },
};
