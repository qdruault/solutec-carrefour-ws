// Import des modules.
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import des méthodes.
const {
    getProduct,
    isFromCountry,
    isFromSupplier,
    isFromCountryAndSupplier,
} = require('../services/product-services');

  // Récupérer les infos d'un produit à partir du code-barres.
router.get('/:barcode', passport.authenticate('jwt', {session: false}), (req, res) => getProduct(req.params.barcode)
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

// Produit d'un pays ?
router.get('/:barcode/country/:idCountry/isFromCountry', passport.authenticate('jwt', {session: false}), (req, res) => isFromCountry(req.params.barcode, req.params.idCountry)
  .then(result => res.json(result))
  .catch(err => {
      if(err.code) {
          res.status(err.code).json(err.message)
      } else {
          res.status(400).json(err)
      }
  })
);

// Produit d'un fournisseur ?
router.get('/:barcode/supplier/:idSupplier/isFromSupplier', passport.authenticate('jwt', {session: false}), (req, res) => isFromSupplier(req.params.barcode, req.params.idSupplier)
  .then(result => res.json(result))
  .catch(err => {
      if(err.code) {
          res.status(err.code).json(err.message)
      } else {
          res.status(400).json(err)
      }
  })
);

// Produit d'un fournisseur et d'un pays ?
router.get('/:barcode/country/:idCountry/supplier/:idSupplier/isFromCountryAndSupplier', passport.authenticate('jwt', {session: false}), (req, res) => isFromCountryAndSupplier(req.params.barcode, req.params.idCountry, req.params.idSupplier)
  .then(result => res.json(result))
  .catch(err => {
      if(err.code) {
          res.status(err.code).json(err.message)
      } else {
          res.status(400).json(err)
      }
  })
);

module.exports = router;
