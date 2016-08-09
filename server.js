var express = require('express');
var app = express();


app.use('/static', express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/angularjs'));

app.get('/', function(req, res){
    res.sendfile('angularjs/app.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});