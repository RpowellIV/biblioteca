'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [{
    firstName: "John",
    lastName: "Doe",
    email: "JohnDoe@email.com",
    gitHubID: null,
    gitHubUsername: "JOHN_GIT",
    createdAt: new Date(),
    updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
