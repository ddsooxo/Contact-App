var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + '/public'));


app.get('/contactlist', function (req, res){
    console.log('I recieved a GET request');
    db.contactlist.find(function (err, docs){
        console.log(docs);
        res.json(docs);
    })
    //res.json(contactlist); >> responds to the get request by sending out 
    //the contactlist data in json format
    //which the controller can use 
});

app.listen(3000);
console.log('server running on port 3000');