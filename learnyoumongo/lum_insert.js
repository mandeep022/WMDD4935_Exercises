
const mng = require('mongodb').MongoClient;

mng.connect('mongodb://localhost:27017/learnyoumongo',(err,db)=>{

	if(err) {console.log(err);}
	let collection = db.collection('docs');
	let mydata = {firstName : process.argv[2],lastName : process.argv[3]
	}
	
	    collection.insert(mydata,(err,data)=>{
		if(err) {console.log(err);}
		console.log(JSON.stringify(mydata));
		db.close();
	})	
	
}
);