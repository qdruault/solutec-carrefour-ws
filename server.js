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
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes de l'application.
var routes = require('./routes/index');
routes(app);

// Connexion à la BDD.
models.sequelize.sync().then(() =>
    app.listen(port, () => console.log("Carrefour WS App listening to port " + port))
);

// Socket.
const appSocket = express();
const ws = require('express-ws')(appSocket);
appSocket.ws('/', (s, req) => {
  console.error('websocket connection');
  for (var t = 0; t < 3; t++) {
    setTimeout(() => s.send('message from server', ()=>{}), 1000*t);
  }
});
appSocket.listen(3030, () => console.error('listening on http://172.20.10.5:3030'));
console.error('websocket example');
/*
var http = require('http').Server(app);
var io = require('socket.io')(http, {
  pingInterval: 10000,
  pingTimeout: 5000
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', (reason) => {
    console.log('user disconnected');
    console.log(reason);
  });
});

http.listen(3030, function(){
  console.log('listening on *:3030');
});
*/

/*
const engine = require('engine.io');
const server = engine.listen(config.socket.port);
console.log("socket listening on #" + config.socket.port);

server.on('connection', function(socket){
  socket.send('utf 8 string');
});

*/
