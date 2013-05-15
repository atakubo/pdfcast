var success = require("../helper").success;

function process(writer) {
  console.log("watch page");
  success(writer, "watch", { title: "watch page"});
}

exports.process = process;

