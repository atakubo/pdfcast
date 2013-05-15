
var definition = [];

function init(pages) {
  for(idx in pages) {
    var page = pages[idx];
    console.log(page);
    definition[page] = require("./controllers/" + page).process;
  }
}

function route(pathname) {
  var page = pathname.substring(1);
  if (page == "") page = "index"
  console.log("route: " + pathname + " => " + typeof definition[page]);

  return definition[page];
}

exports.init = init;
exports.route = route;
