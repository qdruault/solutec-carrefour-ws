// Import du modèle de données.
const { , Product } = require('../database/models');
const models = require('../database/models');

// Création d'un problème.
exports.createOrder = function(orderToCreate) {
  // Initialisation des paramètres.
  const order = {
    id: orderToCreate.id,
    idClient: orderToCreate.idclient || null,
    dateReceived: orderToCreate.dateReceived || null,
    dateDelivery: orderToCreate.dateDelivery || null,
  };

  // On fait une transaction.
  return models.sequelize.transaction(t => {
    return Problem.create(problem, {transaction: t}).then(p => problem.type === "broken"
        // Produit cassé.
    ? Product.findById(problem.barcodeProduct, {transaction: t})
      // On décrémente le stock.
      .then(product => product.decrement('stock', {transaction: t}))
      .then(() => p)
    : p
    )
  })
  .catch(err => {
    console.log(err);
    // Problème de clés étrangères.
    if (err.name === "SequelizeForeignKeyConstraintError") {
      // Indique quel id est introuvable.
      return Promise.reject({code: 404, message: err.table + " not found"});
    } else {
      // Autres erreurs.
      return Promise.reject({code: 400, message: "Un problème est survenu. Merci de réessayer ultérieurement."});
    }
  });
};
