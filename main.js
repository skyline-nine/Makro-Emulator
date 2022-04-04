var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));
// Html links
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
	console.log('index loaded')
});
// fixed
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
	console.log('about page loaded')
});
app.get('/style', function (req, res) {
	res.sendFile(path.join(__dirname, 'style.css'));
	
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Node app is working!');
});
