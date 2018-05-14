// Import du modèle de données.
const { Coworker } = require('../database/models');

// GET coworker.
exports.connectCoworker = function(idCoworker) {
    return Coworker.findById(idCoworker)
        .then(coworker => coworker || Promise.reject({code: 404, message: 'Coworker Not found'})
    );
};
