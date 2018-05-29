// Import du modèle de données.
const { Order, Product, OrderProduct } = require('../database/models');

// Récupère toutes les commandes non traitées.
exports.getAllOrders = function() {
  return Order.findAll({
      include: [{
        model: Product
      }]
    })
    .then(orders => orders)
};

// Ajoute un  produit à une commande.
exports.addProductToOrder = function(idOrder, productBarcode) {
  return OrderProduct.findOne({where: {
      idOrder,
      productBarcode,
      isAdded: false
    }})
    .then(orderProduct => orderProduct && orderProduct.update({
      isAdded: true
    }))
}
