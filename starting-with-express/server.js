const express = require('express');
const app = express();
app.get('/', function (req, res) {
	res.send('<h1>Welcome to home page</h1>');
});
app.listen(3000, function (err) {
	if (err) throw err;
	console.log('Server is running on port 3000');
});
