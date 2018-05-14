// On importe express pour permettre de faire tourner le serveur.
const winston = require('winston')
const expressWinston = require('express-winston')
const config = require('config')
const models = require('./database/models')
const bodyParser = require('body-parser')
require('./utilities/authentication');

var express = require('express'),
    app = express(),
    port = config.port;

// Logger.
app.use(expressWinston.logger({
    transports: [ new winston.transports.Console({json: false, colorize: true})],
    meta:false
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Routes de l'application.
var routes = require('./routes/index');
routes(app);

// Connexion à la BDD.
models.sequelize.sync().then(() =>
    app.listen(port, () => console.log("Carrefour WS App listening to port " + port))
)
