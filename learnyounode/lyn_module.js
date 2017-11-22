const fs = require('fs');
let path =require('path');
let darray = [];
module.exports = function (my_fname,my_extname,callback) {

	 	fs.readdir(my_fname,(err,data) => {

			if(err)
			{
			    	return callback(err)
			}
			
			for(var i in data)
			
			{
				if(path.extname(data[i]) === '.' + my_extname)
			
				{
					darray.push(data[i])
				}
			}
							callback(null,darray)
		})
	
}