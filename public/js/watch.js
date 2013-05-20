
$(document).ready(function() {
  // initializing socket.io
  var socket = io.connect("/");
  socket.on("page", function(data) {
    receivePage(data);
  });

});

// receiving new page
function receivePage(data) {
  $("#page").attr("src", data["image"]);
}

function addPage() {

}

