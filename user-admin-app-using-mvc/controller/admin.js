const adminModel = require('../model/admin');

exports.getUserList = (_, res) => {
	adminModel.getUser((err, result) => {
		if (err) return res.send(err);
		// return res.send(result); //api
		return res.render('admin', {
			pageTitle: 'Admin',
			path: '/admin',
			userList: result,
		});
	});
};
