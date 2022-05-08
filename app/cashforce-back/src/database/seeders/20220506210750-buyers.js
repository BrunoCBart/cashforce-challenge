'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('buyers', [
    {
      name: 'SACADO 001',
      tradingName: 'SACADO 001 LTDA',
      cashforceTax: 0,
      cnpjId: 1,
      createdAt: '2020-10-29 21:20:33',
      updatedAt: '2020-10-29 21:20:34'
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('buyers', null, {})
  }
};
