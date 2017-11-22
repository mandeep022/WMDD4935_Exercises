let mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
	
	db.collection('parrots').find({ age:{$gt: parseInt(process.argv[2])}}).toArray((err,document) => {
	
		console.log(document);
	
		db.close();
	})
}
);