const Joi = require('joi');

exports.LoginValidation = (req, res, next) => {
	const loginSchema = Joi.object({
		email: Joi.string().min(6).max(40).required().email(),
		password: Joi.string().min(6).required(),
	});

	const { error: valError } = loginSchema.validate(req.body);

	if (valError) {
		//if wrong validation then it will execute
		return res.send(valError.details[0].message);
	}
	next();
};

// exports.RegisterValidation = (req, res) => {
// 	const loginSchema = Joi.object({
// 		email: Joi.string().min(6).max(40).required().email(),
// 		password: Joi.string().min(6).required(),
// 	});

// 	const { error: valError } = loginSchema.validate(req.body);
// 	if (valError) {
// 		return res.send(valError.details[0].message);
// 	}
// };
