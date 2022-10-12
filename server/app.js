var bodyParser = require('body-parser')
var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var carouselRouter = require('./routes/corosel.route')

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api',carouselRouter )

let PORT = 3600
app.listen(PORT, function() {
    console.log("App started run on "+ PORT)
});