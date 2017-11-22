let hapi = require('hapi')
let ser = new hapi.Server()

ser.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
}
)

ser.route({path:'/{name}',method:'GET',handler})

function handler(req,res){
	// console.log(req.params.name)
	res('Hello ' + req.params.name)

}

ser.start(function(){
	console.log('Server running at:',ser.info.uri)
})