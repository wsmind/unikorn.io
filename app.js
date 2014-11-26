var express = require("express")
var bodyParser = require("body-parser")
var errorHandler = require("errorhandler")
var http = require("http")

var app = express()
var server = http.createServer(app)

app.set("port", process.env.PORT || 8091)

app.use(bodyParser.json())

app.use(express.static(__dirname + "/public"))

app.use(errorHandler())

server.listen(app.get("port"), function() {
	console.log("Server listening on port %d in mode %s.", app.get("port"), app.get("env"))
})