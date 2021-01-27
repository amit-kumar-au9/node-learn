var express = require('express');
var cityRouter = express.Router();

cityRouter.route('/').get(function (req, res) {
	res.write('City page');
	res.end();
});

cityRouter.route('/details').get(function (req, res) {
	res.write('City details');
	res.end();
});

module.exports = cityRouter;
