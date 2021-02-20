const mongoConnect = require('../mongo');
let db;
mongoConnect((database) => (db = database));
const collection_name = 'userList';

exports.registerUser = (data, callback) => {
	db.collection(collection_name).insertOne(data, (err) => {
		callback(err);
	});
};
