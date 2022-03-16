'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Listings', 'address', {
      type: Sequelize.STRING

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Listings', 'address')
  }
};
