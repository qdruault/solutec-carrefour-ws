const Order = require('../models').Order;
const faker = require('faker');

function populateOrder() {
    const fakeOrders = [];
    let order1 = {
      idclient: 1,
    }

    fakeOrders.push(order1);

    return Order.bulkCreate(fakeOrders);
}

module.exports = populateOrder;
