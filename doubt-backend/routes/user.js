const router = require('express').Router();
const userController = require('../controller/userController');
const authValidation = require('../validation/authValidation');

router.post('/login', authValidation.LoginValidation, userController.loginUser);

router.get('/register', middleware1, middleware2, middleware3);

// router.get('/profile', (req, res) => {
// 	return res.send('profile api');
// });

// router.get('/updateProfile', auth, validation.updateProfile, controller);

// router.get('/deleteProfile', (req, res) => {
// 	return res.send('profile api');
// });

module.exports = router;
