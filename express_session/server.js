const express = require('express');
const session = require('express-session');
const server = express();

const db = [
	{
		id: '1',
		name: 'AMit',
	},
	{
		id: '2',
		name: 'Velmurgan',
	},
];

server.use(
	session({
		secret: 'secret123@#$',
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 3600000 * 24 },
	}),
);

const checkSession = (req, res, next) => {
	console.log('print', req.session.tokenId);
	if (req.session.tokenId) {
		return next();
	}
	return res.send('Session not found');
};

const getData = (req, res) => {
	const data = db.filter((val) => {
		return val.id === req.session.tokenId;
	});
	res.send(data);
};

// login
server.get('/create/:id', (req, res) => {
	req.session.tokenId = req.params.id;
	res.send('Session created');
});

// procted route
server.get('/getData', checkSession, getData);

// logout
server.get('/destroy', checkSession, (req, res) => {
	req.session.destroy();
	res.send('session destroyed');
});

server.listen('3000', (err) => {
	if (err) throw err;
	console.log('Server running at 3000');
});
