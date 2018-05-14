// Import des modules.
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Import du modèle de données.
const { Coworker } = require('../database/models');

// Connexion.
router.post('/', (req, res, next) => {
     const id = req.body.id;
     // On cherche le coworker qui correspond au qrcode décodé.
     return Coworker.findById(id)
       .then(Coworker => {
         if(Coworker) {
           // On stocke l'utilisateur.
           req.user = Coworker.toJSON();
           // On passe à la fonction d'après.
           next();
         } else {
           // Echec de connexion.
           res.status(404).json({message: 'No coworker found'})
         }
       })
   },
   (req, res) => {
     const user = req.user;
     // Génération du token.
     const token = jwt.sign(user, 'your_jwt_secret');
     return res.json({user, token});
   }
 );

module.exports = router;
