var config = {
  local: {
    dataRoot: __dirname + "/data-root",
    redisDb: 0
  },
  
  test: {
    dataRoot: __dirname + "/test-data-root",
    redisDb: 1
  },
  
  production: {
    dataRoot: "/home/www/unikorn.io-data",
    redisDb: 0
  }
}

var env = process.env.NODE_ENV || "local"
module.exports = config[env]
