// Import des modules.
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import des méthodes.
const { getAllSuppliers } = require('../services/supplier-services');

// Récupère tous les fournisseurs.
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => getAllSuppliers()
   .then(result => res.json({ suppliers: result}))
   .catch(err => {
       if(err.code) {
           res.status(err.code).json(err.message)
       } else {
           res.status(400).json(err)
       }
   })
);

module.exports = router;
