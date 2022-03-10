'use strict';
const bcrypt = require("bcryptjs")

module.exports = {
  async up (queryInterface, Sequelize) {

    const salt = await bcrypt.genSalt(10)

    await queryInterface.bulkInsert('Users', [{
      fname: "Mico",
      lname: "Dioquino",
      address: "Calasiao, Pangasinan",
      postal: 2418,
      contact: "09276106336",
      email: "micodioquino17@gmail.com",
      username: "admin",
      password: await bcrypt.hash("admin", salt)
    }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
