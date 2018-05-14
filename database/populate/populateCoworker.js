const Coworker = require('../models').Coworker;
const faker = require('faker');

function populateCoworker() {
    const fakeCoworkers = []
    for (i = [0]; i < 10; i++) {
        fakeCoworkers[i] = {
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            email: faker.internet.email(),
            isManager: faker.random.boolean()
        }
    }
    return Coworker.bulkCreate(fakeCoworkers);
}

module.exports = populateCoworker;
