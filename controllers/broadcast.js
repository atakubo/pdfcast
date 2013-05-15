
var success = require("../helper").success;

function process(writer){
  success(writer, "broadcast", { title: ["broadcast page"] });
}

exports.process = process;

