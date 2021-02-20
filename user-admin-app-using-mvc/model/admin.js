const mongoConnect = require('../mongo');
let db;
mongoConnect((database) => (db = database));
const collection_name = 'userList';

exports.getUser = (callback) => {
	db.collection(collection_name)
		.find()
		.toArray((err, result) => {
			callback(err, result);
		});
};
