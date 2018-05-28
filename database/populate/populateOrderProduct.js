const OrderProduct = require('../models').OrderProduct;
const faker = require('faker');

function populateOrderProduct() {
    const fakeOrderProducts = [
      { idOrder: 1, productBarcode: '0101001123450' },
      { idOrder: 1, productBarcode: '3001001987656' },
      { idOrder: 1, productBarcode: '3008008429486' },
      { idOrder: 2, productBarcode: '0101001123450' },
      { idOrder: 2, productBarcode: '5003003672859' },
      { idOrder: 2, productBarcode: '4103003286320' },
    ];

    return OrderProduct.bulkCreate(fakeOrderProducts);
}

module.exports = populateOrderProduct;
