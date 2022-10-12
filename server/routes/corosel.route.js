var express = require('express');
var router = express.Router();

router.get("/carousel", (req,res) => {
    try{
        console.log(req.query)
        res.send("hiii")
    }catch (e) {
        throw  new Error(e)
    }
})

module.exports = router;