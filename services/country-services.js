// Import du modèle de données.
const { Country } = require('../database/models');

// GET all countries.
exports.getAllCountries = function() {
    return Country.findAll()
        .then(countries => countries || Promise.reject({code: 404, message: 'Coworker Not found'})
    );
};
