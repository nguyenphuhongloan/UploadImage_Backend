const express = require('express');
const route = express.Router();
const Controller = require('../controllers/image.controllers');

route.get('/getImages', Controller.getImageByUser)
route.delete('/deleteImage/:id', Controller.deleteImage)

module.exports = route;