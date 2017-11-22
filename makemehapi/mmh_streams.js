let hapi = require('hapi')
let rot13 = require('rot13-transform')
let server = new hapi.Server()

const fs = require('fs')




server.connection({host:'localhost',port:Number(process.argv[2] || 8080)
})


server.route({path:'/',method:'GET',handler})


function handler(req,res){
	var read_stream = fs.createReadStream('./file.txt')
	res(read_stream.pipe(rot13()))

    
}

server.start(function(){
	console.log('Server running at:',server.info.uri)
	
})