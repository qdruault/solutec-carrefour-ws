// Import des modules.
const express = require('express');
const router = express.Router();
const multer = require('multer');
const passport = require('passport');

// Import des méthodes.
const { getAllOrders } = require('../services/order-services');

// Récupère toutes les commandes non traitées.
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => getAllOrders()
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
        if(err.code) {
            res.status(err.code).json(err.message)
        } else {
            res.status(400).json(err)
        }
    })
);

module.exports = router;
