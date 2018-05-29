// Import du modèle de données.
const { Order, Product } = require('../database/models');

// Récupère toutes les commandes non traitées.
exports.getAllOrders = function() {
  return Order.findAll({
      include: [{
        model: Product
      }]
    })
    .then(orders => orders)
};
