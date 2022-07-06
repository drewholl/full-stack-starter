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
      PhoneNumber: {
        type: Sequelize.STRING,
      },
      Type: {
        type: Sequelize.STRING,
      },
      Hours: {
        type: Sequelize.STRING,
      },
      Rate: {
        type: Sequelize.DECIMAL,
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
