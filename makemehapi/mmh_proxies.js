let hapi = require('hapi');
let H2o2 = require('h2o2');

let ser = new hapi.Server();

ser.connection({
    
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
}
);

ser.register(H2o2, (err) => {
    if (err) throw err;
}
);

ser.route({
    method: 'GET',
    path: '/proxy',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
}
);

ser.start();