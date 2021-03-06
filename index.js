var Organel = require("organic").Organel;
var http = require('http');

module.exports = Organel.extend(function(plasma, dna){
  Organel.call(this, plasma, dna);

  var self = this;
  this.server = http.createServer(function(req, res){ self.emitIncomingRequest(req, res) });
  this.server.listen(this.config.port, this.config.ip, function(){self.emitReady()});
  this.on("kill", function(){
    this.server.close()
  })
}, {
  emitIncomingRequest: function(req, res) {
    var self = this
    this.emit({
      type: this.config.emit.request,
      req: req,
      res: res
    }, function(c){
      self.emit(c);
    })
  },
  emitReady: function(){
    if(this.config.log)
      console.log("HttpServer running at", this.config.port)
    this.emit({
      type: this.config.emit.ready,
      data: this.server
    })
  }
})
