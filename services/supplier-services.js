// Import du modèle de données.
const { Supplier } = require('../database/models');

// GET all suppliers.
exports.getAllSuppliers = function() {
    return Supplier.findAll()
        .then(suppliers => suppliers || Promise.reject({code: 404, message: 'Coworker Not found'})
    );
};
