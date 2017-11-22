var mng = require('mongodb').MongoClient

mng.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){

	db.collection('parrots').find({ age:{$gt: parseInt(process.argv[2])}} , { _id: 0, name: 1, age: 1}).toArray((err,document)=>{

		console.log(document);

		db.close();
	})
}
);