var render = require("./renderer").render;

function success(writer, name, args) {
  writer(200, "text/html", render(name, args));
}

exports.success = success;
