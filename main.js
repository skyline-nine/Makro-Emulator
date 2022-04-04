var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// Html links
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'index.html'));
	console.log('index loaded');
});
// broke it again
app.get('/about', function (req, res) {
	res.sendFile(path.join(__dirname,'about.html'));
	console.log('about page loaded');
});
app.listen(process.env.PORT || 3000, function () {
	console.log('Node app is working!');
});