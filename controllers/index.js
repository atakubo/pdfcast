var success = require("../helper").success;

function process(writer) {
  console.log("main page");
  success(writer, "index", { title: "pdfcast main page"});
}

exports.process = process;

