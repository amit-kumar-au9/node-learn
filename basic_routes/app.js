var express = require('express');
var app = express();
var port = 7800;

app.get('/', function (req, res) {
	res.write('<h1>Welcome to home page</h1>');
	res.end();
});

var cityRouter = require('./city');
var hotelRouter = require('./hotel');

app.use('/city', cityRouter);

app.use('/hotel', hotelRouter);

app.listen(port, function (err) {
	if (err) throw err;
	console.log(`Server is running on port ${port}`);
});
