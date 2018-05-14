// Import des modules.
const express = require('express');
const router = express.Router();
const multer = require('multer');
const passport = require('passport');

// Import des méthodes.
const { createProblem } = require('../services/problem-services');
const { uploadFile } = require('../utilities/upload');

// Créer un problème.
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => createProblem(req.body)
    .then(result => res.json(result))
    .catch(err => {
        if(err.code) {
            res.status(err.code).json(err.message)
        } else {
            res.status(400).json(err)
        }
    })
);

// Stockage d'une image.
router.post('/file', passport.authenticate('jwt', {session: false}), (req, res) => uploadFile(req, res, (err) => {
    if(err) {
      res.status(400).json(err)
    } else {
      res.send(req.file.path)
    }
  })
);

module.exports = router;
