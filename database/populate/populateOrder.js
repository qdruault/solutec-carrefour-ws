const Order = require('../models').Order;
const faker = require('faker');

function populateOrder() {
    const fakeOrders = [
      { idClient: 1 },
      { idClient: 2 },
      { idClient: 3 },
    ];

    return Order.bulkCreate(fakeOrders);
}

module.exports = populateOrder;
