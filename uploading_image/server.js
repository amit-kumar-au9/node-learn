const express = require('express');
const server = express();
const fileUpload = require('express-fileupload');
const galleryRouter = require('./routes/gallery');

server.use(express.json());
server.use(fileUpload());

server.get('/health', (req, res) => {
	res.send('Status ok');
});

server.use('/gallery', galleryRouter);

server.listen(6700, (err) => {
	if (err) throw err;
	console.log('Server running at 6700');
});
