var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

var users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
	res.render('users', {
		pageTitle: 'User',
		users: users,
		hasUsers: users.length > 0,
	});
});

app.post('/add-user', (req, res, next) => {
	users.push({ name: req.body.username });
	res.redirect('/users');
});

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server is running at port ${port}`);
});
