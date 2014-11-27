module.exports = function(app) {
  app.get("/api/projects", function(request, response) {
    response.json(["test1", "test2"])
  })
}
