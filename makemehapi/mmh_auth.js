let user = { name: 'hapi', password: 'auth' };
let ser = new Hapi.Server();
const Hapi = require('hapi');
const Auth = require('hapi-auth-basic');

ser.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
}
);



   let validate = (request, username, password, callback) => {
let isValid = username === user.name && password === user.password;

    return callback(null, isValid, { name: user.name });
};


ser.register(Auth, (err) => {
    ser.auth.strategy('simple', 'basic', { validateFunc: validate });
    ser.route({
        method: 'GET',
        path: '/',
        config: {
            auth: 'simple',
            handler: (request, reply) => {
                reply();
            }
        }
    }
);

    ser.start((err) => {
        if (err) throw err;
    }
    );
}
);