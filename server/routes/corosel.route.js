var express = require('express');
const getCarousals = require("../services/carousel.service");
var router = express.Router();
const dummyData = require("../db/dummyData.json");

router.get("/carousel", async (req,res) => {
    try{

        let length;
        if(req.query['slides']){
            length = parseInt(req.query['slides']) ;
        }else{
            length = 10;
        }
        let result = await getCarousals(length, dummyData);
        res.setHeader('Content-Type', 'application/json');
        res.send(result)
    }catch (e) {
        throw  new Error(e)
    }
})

module.exports = router;