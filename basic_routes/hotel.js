var express = require('express');
var hotelRouter = express.Router();

hotelRouter.route('/').get(function (req, res) {
	res.write('Hotel page');
	res.end();
});

hotelRouter.route('/details').get(function (req, res) {
	res.write('hotel details');
	res.end();
});

module.exports = hotelRouter;
