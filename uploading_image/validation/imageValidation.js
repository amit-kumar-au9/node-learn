const imageType = [
	'image/png',
	'image/jpg',
	'image/jpeg',
	'image/PNG',
	'image/JPG',
	'image/JPEG',
];

const ImageValidation = (req, res, next) => {
	if (!imageType.includes(req.files.imageFile.mimetype)) {
		return res.status(400).json({
			message: 'Invalid file type',
			error: 'Please upload file in image type ie png, jpg, jpeg',
		});
	}
	next();
};

module.exports = ImageValidation;
