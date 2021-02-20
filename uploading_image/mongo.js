const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoURL = 'mongodb://localhost:27017';
const mongoConnect = (callback) => {
	MongoClient.connect(mongoURL, { useUnifiedTopology: true })
		.then((client) => {
			console.log('Database Connected');
			callback(client.db('all-images'));
		})
		.catch((err) => console.log(err));
};

module.exports = mongoConnect;
