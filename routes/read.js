const express = require('express')
const router = express.Router()
const { MongoClient,url } = require('../database/mongodb2')
const verifyToken = require('../utils/middleware')

router.get('/read',verifyToken,(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err){
            res.json({
                message:"Could not connect to MongoDb!"
            })
        }
        var dbo = db.db("CP2")
        // const myObj = {title:req.body.title ,desc:req.body.desc}
        dbo.collection("BMC2").find({}).toArray((err,final)=>{
            if(err){
                res.json({
                    message:"Not able to read the data"
                })
            }
            res.json({
                message:"Data fetched",
                data:final
            })
            db.close();
        })
    })
})

module.exports = router