const express = require('express');
const route = express.Router();
const Controller = require('../controllers/upload.controllers');
const multer = require('../config/storage');

route.post('/image', multer.array("image"), Controller.checkTotalFileSize, Controller.upload)
module.exports = route;