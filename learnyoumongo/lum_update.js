
const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo',(err,db)=>{

	if(err) {console.log(err);}

	let collection = db.collection('users');


	
	collection.update({"username": "tinatime"},{$set: {"age": 40}})

	db.close();
});
