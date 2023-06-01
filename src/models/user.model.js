const mongoose = require('mongoose');
const {defaultModel} = require('../config/defaultModel');
const Schema = mongoose.Schema;
const user = new Schema({
    name: defaultModel.stringR,
    phone: defaultModel.phoneNumber,
    address: defaultModel.stringR,
    email: defaultModel.email,
    password: defaultModel.password,
    
})
module.exports = mongoose.model("User", user);