

var socket = io.connect("/");

function sendImage(name, img) {
  var data = {
    name: name
    , image: img
  };
  socket.emit("image", data);
}

