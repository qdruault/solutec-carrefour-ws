const express = require('express');
const router = express.Router();

const { createOrder } = require('../services/order-services');

// Créer un problème.
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => createOrder(req.body)
    .then(result => res.json(result))
    .catch(err => {
        if(err.code) {
            res.status(err.code).json(err.message)
        } else {
            res.status(400).json(err)
        }
    })
);
