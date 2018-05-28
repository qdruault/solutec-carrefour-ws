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
        firstName: "Rémi",
        isManager: faker.random.boolean()
      },
      {
        lastName: "Martin",
        firstName: "Jean",
        isManager: faker.random.boolean()
      },
      {
        lastName: "Lefevebre",
        firstName: "Louis",
        isManager: faker.random.boolean()
      },

    ];
    
    return Coworker.bulkCreate(fakeCoworkers);
}

module.exports = populateCoworker;
