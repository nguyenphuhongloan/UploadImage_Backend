const mongoose = require('mongoose');
const { defaultModel } = require('../config/defaultModel');
const Schema = mongoose.Schema;
const image = new Schema({
    name: defaultModel.stringR,
    ownerId: defaultModel.stringR,
    url: defaultModel.string
})
module.exports = mongoose.model("Image", image);