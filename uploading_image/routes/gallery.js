const router = require('express').Router();

const galleryController = require('../controller/gallery');
const ImageValidation = require('../validation/imageValidation');

router.post('/addImage', ImageValidation, galleryController.addImage);
router.get('/getImages', galleryController.getImages);

module.exports = router;
