const Client = require('../models').Client;

function populateClient() {
    const fakeClients = [
      {firstName: "Pierre", lastName: "Hemery"},
      {firstName: "Quentin", lastName: "Druault-Aubin"},
      {firstName: "Raphaël", lastName: "Rouquet"}
    ];

    return Client.bulkCreate(fakeClients);
}

module.exports = populateClient;
