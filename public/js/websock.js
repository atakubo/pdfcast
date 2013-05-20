

var socket;

$(document).ready(function() {
  socket = io.connect("/");
});

// sending rendered PDF image to server 
function sendImage(name, img) {
  var data = {
    name: name
    , image: img
  };
  socket.emit("image", data);
}

