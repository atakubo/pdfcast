
var socket = require("socket.io");

var images = [];

function init(server) {
  var io = socket.listen(server);
  io.sockets.on('connection', function(sock) {
    console.log("connetcted");
    // receive image
    sock.on("image", function(data) {
      receive(data);
      broadcast(sock, data);
    });
  });
}

function receive(data) {
  console.log("image received");
  images[data["name"]] = data["image"];
}

function broadcast(sock, data) {
  console.log("image broadcat");
  sock.broadcast.emit("page", data);
}

exports.init = init;

