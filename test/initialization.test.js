var assert = require("assert")
var fs = require("fs")
var rimraf = require("rimraf")

var config = require("../config")

before(function(done) {
  assert(process.env.NODE_ENV == "test")
  
  fs.mkdir(config.dataRoot, function(err) {
    if (err) return done(err)
    
    require("../app").initialize(function(err, app) {
      if (err) return done(err)
      
      // expose the express app for supertest assertions
      testApp = app
      
      return done()
    })
  })
})

after(function(done) {
  rimraf(config.dataRoot, done)
})
