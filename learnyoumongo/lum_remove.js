
const mng = require('mongodb').MongoClient;

mng.connect('mongodb://localhost:27017/learnyoumongo',(err,db)=>{

	if(err) {console.log(err);}

	let collection = db.collection(process.argv[3]);
	
	collection.remove({"_id": process.argv[4]});
	
	db.close();
}

);