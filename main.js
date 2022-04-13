var express = require('express');
const upload = require("express-fileupload");
var app = express();
var path = require('path');
var fs = require('fs');
const router = express.Router();

// For program to access file DO NOT DELETE
app.use(express.static(__dirname + '/'));
// Html links
app.get('/', function (req, res) {
	console.log('main page loading');
	res.sendFile(path.join(__dirname, 'index.html'));
	console.log('main page loaded');
});

app.get('/about', function (req, res) {
	console.log('about page loading');
	res.sendFile(path.join(__dirname, 'about.html'));
	console.log('about page loaded');
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Node app is working!');
});


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname,'/404.html'))
})