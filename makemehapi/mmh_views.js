let hapi = require('hapi');
let path = require('path');
let Vis = require('vision');
let ser = new hapi.Server();

ser.register(Vis,function(err){
	if(err) throw err;
});

ser.views({
	engines:{
		html:require('handlebars')
	},
	path: path.join(__dirname,'templates')
});

ser.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

ser.route({path: '/{name?}',method:'GET',handler:{
	view:"index.html"
}})

ser.start(function(){
	console.log('Server running at:',ser.info.uri)
})