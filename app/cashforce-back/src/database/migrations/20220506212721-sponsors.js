'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tradingName: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      cashforceTax: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      responsibleName: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      responsibleEmail: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      responsiblePosition: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      responsiblePhone: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      responsibleMobile: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      website: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      postalCode: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      number: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      complement: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      neighborhood: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      city: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      bank: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      bankAgency: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      account: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      phoneNumber: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      situation: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      situationDate: {
        type: Sequelize.DATE,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sponsors')
  }
};
