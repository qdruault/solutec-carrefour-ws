const Product = require('../models').Product;
const faker = require('faker');
const moment=require('moment');

function populateProduct() {
    const countries = [ "010", "300", "410", "500"];
    const suppliers = [ "1001", "3003", "4004", "8008"];
    const products = [ "11111", "22222", "33333", "44444"];
    const fakeProducts = [
      {
        barcode: '0101001123450',
        name: "Coca Cola Bottle 50cl",
        price: faker.commerce.price(1, 100, 2),
        stock: faker.random.number()
      },
      {
        barcode: '3001001987656',
        name: "Evian 33cl",
        price: faker.commerce.price(1, 100, 2),
        stock: faker.random.number()
      },
      {
        barcode: '3008008429486',
        name: "Nutella 825g",
        price: faker.commerce.price(1, 100, 2),
        stock: faker.random.number()
      },
    ];

    for (country of countries) {
      for (supplier of suppliers) {
        for (product of products) {
          // Code-barres sans la clé de contrôle.
          const barcode = country + supplier + product;
          // Calcul de la clé.
          let key = 0;
          for (let i = 0; i < barcode.length; i++) {
            if (i % 2 === 0) {
              key += parseInt(barcode[i]);
            } else {
              key += 3 * parseInt(barcode[i]);
            }
          }
          // Clé finale.
          key = key % 10 !== 0 ? 10 - (key % 10) : 0;
          // Nouveau produit.
          const newProd = {
            barcode: `${barcode}${key}`,
            name: faker.commerce.productName(),
            price: faker.commerce.price(1, 100, 2),
            stock: faker.random.number()
          };

          fakeProducts.push(newProd)
        }
      }
    }

    return Product.bulkCreate(fakeProducts);

}

module.exports = populateProduct;
