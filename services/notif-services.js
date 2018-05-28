


exports.sendMessage = function(io) {
  io.sockets.on('connection', function (socket) {
    socket.on('message', function (msg) {
      console.log(msg);
    });
  });
}
