let Hapi = require('hapi');
let ser = new Hapi.Server();

             ser.connection({
             port: Number(process.argv[2] || 8080),
             host: 'localhost'
});

          ser.route({
  method: 'POST',
  path: '/upload',
  config: {
    handler: (request, reply) => {
      var body = '';

      request.payload.file.on('data', (data) => {
        body += data;
      }
);

      request.payload.file.on('end', () => {
        let result = {
          
          description: request.payload.description,
          file: {
            data: body,
            filename: request.payload.file.hapi.filename,
            headers: request.payload.file.hapi.headers
          }
        };

        reply(JSON.stringify(result));
      }
      );

    },


    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
}
);



ser.start((err) => {
    if (err) throw err;
});