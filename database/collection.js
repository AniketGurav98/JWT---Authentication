var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1/"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('CP');
  dbo.createCollection('BMC', function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});