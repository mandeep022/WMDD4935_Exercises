let hapi = require('hapi')
let ser = new hapi.Server()


let Inert = require('inert')
let path = require('path')




ser.register(Inert,function(err){
	if(err) throw err;
})





ser.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})

ser.route({path: '/foo/bar/baz/{file}',
             method:'GET',
             handler:{
	directory: {path: path.join(__dirname,'public')}
}
    
})

ser.start(function(){
	console.log('Server running at:',ser.info.uri)
})