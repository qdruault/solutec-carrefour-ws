// Import des modules.
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import des méthodes.
const { connectCoworker } = require('../services/coworker-services');

// Se connecter en vérifiant que l'id existe.
router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res) => connectCoworker(req.params.id)
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
