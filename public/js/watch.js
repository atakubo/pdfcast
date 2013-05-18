var socket = io.connect("/");
socket.on("page", function(data) {
  receivePage(data);
});

function receivePage(data) {
  $("#page").attr("src", data["image"]);
}

