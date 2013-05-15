
var server = require("./server");

// set route controller
var router = require("./router");
router.init(["index", "watch", "broadcast"]);

// start server
server.start(router.route);
