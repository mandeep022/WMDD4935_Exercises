var mymodule = require('./lyn_module.js')  
mymodule(process.argv[2],process.argv[3],function (error,data){
	
	
	
	
	if(error)
	{
		console.log(error);
	}
	else
	{
		for(var i in data)
		{
			console.log(data[i]);
		}
		
	}
}

);