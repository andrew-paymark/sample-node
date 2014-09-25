

var util = require('util');

var express = require('express');
var bodyParser = require('body-parser');

var PORT = 9000;

//create server
var app = express();
//enable json responses
app.use(bodyParser.json());


app.get('/inspect', function(req, res){
    res.send(util.inspect(req));
});

app.post('/inspect', function(req, res){
    res.send(util.inspect(req));
});

app.post('/header', function(req, res){
    var requestInfo = {
        contentType: req.get('Content-Type') || "undefined",
        url: req.url,
        method: req.method
    };

    res.json(requestInfo);
});

app.listen(PORT);


console.log("Listening on :" + PORT);
