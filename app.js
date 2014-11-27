var express = require("express")
var bodyParser = require("body-parser")
var errorHandler = require("errorhandler")
var http = require("http")
var redis = require("redis")

var config = require("./config")

module.exports.initialize = function(callback) {
  var redisClient = redis.createClient()
  redisClient.select(config.redisDb, function(err) {
    if (err) return callback(err)
    
    var app = express()
    
    app.set("port", process.env.PORT || 8091)
    app.set("redis", redisClient)
    
    app.use(bodyParser.json())

    // api
    require("./api/projects")(app)

    // web app
    app.use(express.static(__dirname + "/public"))

    app.use(errorHandler())
    
    return callback(null, app)
  })
}

// start web server only when not running the tests
if (process.env.NODE_ENV != "test") {
  module.exports.initialize(function(err) {
    if (err) throw err
    
    var server = http.createServer(app)
    server.listen(app.get("port"), function() {
      console.log("Server listening on port %d in mode %s.", app.get("port"), app.get("env"))
    })
  })
}
