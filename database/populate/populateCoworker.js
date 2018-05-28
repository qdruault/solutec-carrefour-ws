const Coworker = require('../models').Coworker;
const faker = require('faker');

function populateCoworker() {
    const fakeCoworkers = [
      {
        lastName: "Dupont",
        firstName: "Jean",
        isManager: faker.random.boolean()
      },
      {
        lastName: "Dubois",
        firstName: "Marie",
        isManager: faker.random.boolean()
      },
      {
        lastName: "Martin",
        firstName: "Pierre",
        isManager: faker.random.boolean()
      },
      {
        lastName: "Lefevebre",
        firstName: "Louise",
        isManager: faker.random.boolean()
      },

    ];

    return Coworker.bulkCreate(fakeCoworkers);
}

module.exports = populateCoworker;
