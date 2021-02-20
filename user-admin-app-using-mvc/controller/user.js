const userModel = require('../model/user');

exports.registerPage = (_, res) => {
	// return res.send('register page'); // api
	return res.render('register', {
		pageTitle: 'Register',
		path: '/',
		msg: '',
	});
};

exports.registerUser = (req, res) => {
	const data = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};
	userModel.registerUser(data, (err) => {
		if (err) return res.send(err);
		return res.render('register', {
			pageTitle: 'Register',
			path: '/',
			msg: 'Successfull registration',
		});
	});
};
