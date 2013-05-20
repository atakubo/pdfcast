
var slider;
var imgArray = [];
var option = {
  infiniteLoop: false, 
  hideControlOnEnd: true, 
  pager: false,
  minSlides: 3, 
  maxSlides: 5,
  slideMargin: 10, 
  slideWidth: 200, 
};

$(document).ready(function() {
  // initializing socket.io
  var socket = io.connect("/");
  socket.on("page", function(data) {
    receivePage(data);
  });

});

// receiving new page
function receivePage(data) {
  $("#main_img").attr("src", data["image"]);
  addList(data);
  reloadSlider();
}

function addList(data) {
  $("#list").append(
    $("<li>").attr("id", data["name"]).append(
      $("<img>").attr("id", "img_" + data["name"])
                .attr("class", "page")
                .attr("src", data["image"])
                .attr("width", 200)
    )
  );
}

function reloadSlider() {
  if (!slider) {
    slider = $(".bxslider").bxSlider(option);
  } else {
    slider.reloadSlider(option);
  }
}

