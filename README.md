# organic-httpserver

The organelle wraps core httpServer implementation.

It starts httpServer listening upon construction.

## DNA structure and defaults

    {
      "log": false,
      "port": Number,
      "emit": {
        "ready": String,
        "request": String
      }
    }


## Emits chemicals when

### listening

Emitted with Chemical type value of `dna.emit.ready`.
Chemical's structure:

    {
      "type": `dna.emit.ready`,
      "data": HttpServer
    }

### incoming request

Emitted with Chemical type value of `dna.emit.request`.
Chemical's structure:

    {
      "type": `dna.emit.request`,
      "req": HttpRequest,
      "res": HttpResponse
    }

## Reacts to chemicals

### type: "kill"

Closes underlaying httpServer instance
