'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true

      },
      orderFileName: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true

      },
      emissionDate: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      pdfFile: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      CTE: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      value: {
        type: Sequelize.STRING,
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
        allowNull: false,
        references: {
          model: 'cnpjs',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'users',
          key: 'id'
          },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      buyerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'buyers',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      providerId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'providers',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        defaultValue: null
      }
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('orders')
  }
};
