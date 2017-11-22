
let http = require('http');

let map = require('through2-map');

let uppercase = map(function(chunk) {
    
  return chunk.toString().toUpperCase();
}
);

let server = http.createServer(function(request, response) {
    
  if (request.method == 'POST') {
      
    request.pipe(uppercase).pipe(response);
  }
}

);

server.listen(process.argv[2]);