const express = require('express');
const route = express.Router();
const userRoute = require('./user.routes');
const uploadRoute = require('./upload.routes');
const imageRoute = require('./image.routes');


route.use("/api/user",userRoute);
route.use("/api/upload",uploadRoute);
route.use("/api/image", imageRoute);

module.exports = route;