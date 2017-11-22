let http = require('http');

let result = ''

let request = http.get(process.argv[2], (response)=>{
    
	response.setEncoding('utf8');
	response.on('data', (data)=>{
	
		result+=data.toString();
	}
);

	response.on('error', (e)=>{
	console.log(e);
	
	}
);
	response.on('end',()=>{
		console.log(result.length);
		console.log(result);
	
		result='';
	});
}
);