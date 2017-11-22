let path = require('path')
let ser = new hapi.Server()
let hapi = require('hapi')
let joi = require('joi')

ser.connection({
	host:'localhost',
	port:Number(process.argv[2] || 8080)

    
})

ser.route({
	path: '/login',
	method: 'POST',
	config:{
		handler: (req,res) => {
			res('login successful')
		},
		validate:{
			payload: joi.object({
				isGuest: joi.boolean().required(),
				username: joi.string().when('isGuest', { is: false, then: joi.required() }),
				password: joi.string().alphanum(),
				accessToken: joi.string().alphanum()
			})
			.options({allowUnknown: true})
			.without('password','accessToken')
		}
	}
})

ser.start(function(){
	console.log('Server running at:',ser.info.uri)
})