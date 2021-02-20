const mongo = require('mongodb');
const mongoConnect = require('../mongo');
var db;
mongoConnect((database) => (db = database));
const collection_name = 'images';

exports.insertImage = (data, callback) => {
	db.collection(collection_name).insertOne(data, (err) => {
		callback(err);
	});
};

exports.getImages = (callback) => {
	db.collection(collection_name)
		.find()
		.toArray((err, data) => {
			callback(err, data);
		});
};
