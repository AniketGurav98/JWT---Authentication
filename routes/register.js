var express = require('express');
var router = express.Router();
const {MongoClient , url} = require('../database/mongodb');

router.post('/register', function(req, res) {
    MongoClient.connect(url,async (err,db)=>{
        if(err){
            res.json({
                message:"Could not Connect to MonogoDb"
            })
        }
    const dbo = db.db("CP")
        const myObj = { name:req.body.name, email:req.body.email, password:req.body.password }
        console.log(myObj)
        const myData = await dbo.collection("BMC").insertOne(myObj)
            res.json({
                message:"Registered and added the data to DB",
                status:myData
            })
        })
    })

module.exports = router;