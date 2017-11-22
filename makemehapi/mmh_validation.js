let Hapi = require('hapi');
let ser = new Hapi.Server();
let Joi = require('joi');



ser.connection({
    
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});


ser.route({
    
    method: 'GET',
    
    path: '/chickens/{breed}',
    
    
    config: {
      
        handler: (request, reply) => {
            reply('You asked for the chicken ' + request.params.breed);
        },
      
        validate: {
            params: {
      
                breed: Joi.string().required()
      
            }
        }
    }
}
);

ser.start((err) => {
    if (err) throw err;
}
);