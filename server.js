// server management

const port = 8888;

var http = require("http");
var url = require("url");

function reply(response, fn) {
  fn(function(status, type, content) {
    response.writeHead(status, {"Content-Type": type});
    response.write(content);
    response.end();
  });
}

// initializing and starting server
function start(route) {
  http.createServer(function(request, response) {
    console.log("request received");

    var pathname = url.parse(request.url).pathname;
    console.log(pathname);

    if(route) {
      var impl = route(pathname);
      console.log(impl);
      if(impl) {
        reply(response, impl);
        return;
      }
    }
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("page not found!");
    response.end();
  }).listen(port);

  console.log("server started: " + port)
}

exports.start = start;


