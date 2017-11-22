let hapi = require('hapi');

let Vision = require('vision');

let ser = new hapi.Server();

let path = require('path');

ser.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
}
)

ser.register(Vision,function(err){

if(err) throw err;
}

);

ser.views({
	path:path.join(__dirname,'templates'),
	engines:{
		html:require('handlebars')
	},
	helpersPath:path.join(__dirname,'helpers')
	}
	
	);


ser.route({path: '/',method:'GET',handler:{
	view: 'index.html'
}
    
})

ser.start(function(){
	console.log('Server running at:',ser.info.uri)
})