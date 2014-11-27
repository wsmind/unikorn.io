var request = require("supertest")

describe("Project", function() {
  before(function(done) {
    testApp.get("redis").flushdb(done)
  })
  
  it("plops", function(done)
  {
    request(testApp)
      .get("/api/projects")
      .expect(200)
      .expect(["test1", "test2"])
      .end(done)
  })
})
