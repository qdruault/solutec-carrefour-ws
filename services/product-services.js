// Import du modèle de données.
const { Product, Supplier } = require('../database/models');
const models = require('../database/models');

// GET product.
exports.getProduct = function(barcode) {
    return Product.findById(barcode)
        .then(product => {
          if (product) {
            const idSupplier = product.barcode.substring(2, 7);

            return Supplier.findOne({
              where: {
                id: idSupplier,
              }
            })
            .then(({name}) => ({...product.toJSON(), supplier: name}))
            .then(res => {
              return res;
            })
          }

          return Promise.reject({code: 404, message: 'Not found'})
        }
    );
};

// Test d'apartenance d'un produit à un pays.
exports.isFromCountry = function(barcode, idCountry) {
    const check = barcode.substring(0, 3) === idCountry;
    if (check) {
      return Promise.resolve("ok");
    } else {
      return Promise.reject({code: 404, message: 'Do not match'})
    }
};

// Test d'apartenance d'un produit à un fournisseur.
exports.isFromSupplier = function(barcode, idSupplier) {
    const check = barcode.substring(2, 7) === idSupplier;
    if (check) {
      return Promise.resolve("ok");
    } else {
      return Promise.reject({code: 404, message: 'Do not match'})
    }
};

// Test d'apartenance d'un produit à un oays et un fournisseur.
exports.isFromCountryAndSupplier = function(barcode, idCountry, idSupplier) {
    const check = barcode.substring(0, 3) === idCountry;
    const check2 = barcode.substring(2, 7) === idSupplier;
    if (check && check2) {
      return Promise.resolve("ok");
    } else {
      return Promise.reject({code: 404, message: 'Do not match'})
    }
};
