var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1/CP2"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

module.exports= {MongoClient, url}