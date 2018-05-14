// Import des modules.
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import des méthodes.
const { getAllCountries } = require('../services/country-services');

// Récupère tous les pays.
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => getAllCountries()
    .then(result => res.json({ countries: result}))
    .catch(err => {
        if(err.code) {
            res.status(err.code).json(err.message)
        } else {
            res.status(400).json(err)
        }
    })
);

module.exports = router;
