'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Listings', 'lng', {
      type: Sequelize.FLOAT

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Listings', 'lng')
  }
};
