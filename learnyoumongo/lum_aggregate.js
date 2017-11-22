let mongo = require('mongodb').MongoClient
let size = process.argv[2]

mng.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){

mongo.connect(url, function(err, db) {
  if (err) throw err
  let prices = db.collection('prices')
  prices.aggregate([
    { $match: {
      size: size
    }}
  , { $group: {
      _id: 'average'
    , average: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err
    if (!results.length) {
      throw new Error('No results found')
    }
    let o = results[0]
    console.log(Number(o.average).toFixed(2))
    db.close()
  
  })
})