// Import des modules.
const multer = require('multer');

// Config pour le stockage des fichiers.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Dossier de destination.
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // On récupère l'extension.
    const ext = file.originalname.match(/\..+/)[0];
    cb(null, "photo" + '-' + Date.now() + ext)
  }
});

// Upload du fichier contenu dans le champ 'file'.
exports.uploadFile = multer({storage}).single('file');
