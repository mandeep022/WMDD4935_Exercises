let Hapi = require('hapi');
let path = require('path');

 let ser = new Hapi.Server();
    ser.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });

let Inert = require('inert');
    
    ser.register(Inert, function (err) {
        if (err) throw err;
    });
    
    
   
    
  ser.route({
  method: 'GET',
  path: '/',
  handler: {
    file: path.join(__dirname, 'index.html')
  }
}
);

ser.start();