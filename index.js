var express = require('express'),
    app = express(),
    bodyParser=require('body-parser');
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/public/login.html');
});
app.get('/profile', function (req, res) {
    res.sendFile(__dirname + '/public/profile.html');
});
app.listen(process.env.PORT||7000);
