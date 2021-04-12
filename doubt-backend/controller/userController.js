exports.loginUser = (req, res) => {
	return res.send('login controller');
};

exports.registerUser = (req, res) => {
	const loginSchema = Joi.object({
		email: Joi.string().min(6).max(40).required().email(),
		password: Joi.string().min(6).required(),
	});

	const { error: valError } = loginSchema.validate(req.body);
	if (valError) {
		return res.send(valError.details[0].message);
	}
	//1-10 controller
	// database 10
	return res.send('register api');
};
