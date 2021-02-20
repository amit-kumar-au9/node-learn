const galleryModel = require('../model/gallery');

const generateRandomString = (length = 8) =>
	Math.random().toString(20).substr(2, length);

exports.addImage = (req, res) => {
	const imageFile = req.files.imageFile;
	let imageFileName = `${generateRandomString()}${imageFile.name}`;
	imageFile.mv(`./public/images/${imageFileName}`, (err, _) => {
		if (err)
			return res
				.status(500)
				.json({ message: 'Server error', error: err });
		const data = { name: req.body.name, imagePath: imageFileName };
		galleryModel.insertImage(data, (err) => {
			if (err)
				return res
					.status(500)
					.json({ message: 'Mongo error', error: err });
			return res.json({ message: 'File Uploaded' });
		});
	});
};

exports.getImages = (_, res) => {
	galleryModel.getImages((err, data) => {
		if (err)
			return res
				.status(500)
				.json({ message: 'Server error', error: err });
		return res.json({ message: 'Data recieved', data: data });
	});
};
