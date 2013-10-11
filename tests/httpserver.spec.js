var Chemical = require("organic").Chemical;
var Plasma = require("organic").Plasma;
var HttpServer = require("../index");

var request = require("request")

describe("WebSocketServer", function(){
  var plasma = new Plasma();
  var config = {
    "port": 8083,
    "emit": {
      "ready": "HttpServer",
      "request": "IncomingHttpRequest"
    }
  }

  var server;

  it("should create new instance", function(){
    server = new HttpServer(plasma, config);
    expect(server).toBeDefined();
  });

  it("should emit incoming http request", function(next){
    plasma.on("IncomingHttpRequest", function(c){
      expect(c.req).toBeDefined()
      expect(c.res).toBeDefined()
      c.res.end()
      next()
    })
    request.get("http://127.0.0.1:8083", function(req, res, next){
    })
  });

  it("should close on receiving kill", function(){
    plasma.emit(new Chemical("kill"));
  });
});
