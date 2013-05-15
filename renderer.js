// render function with jade 
var jade = require("jade");
var fs = require("fs");

// for template cache
var templates = [];
var templateDir = __dirname + "/views";

/*

 */
function render(page, args) {
  if (!templates[page]) {
    file = fs.readFileSync(templateDir + "/" + page + ".jade", "utf-8");
    templates[page] = jade.compile(file, { pretty: true} );
  }
  return templates[page](args);
}

exports.render = render;
