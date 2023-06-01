const mongoose = require('mongoose');
const {MONGO_URL} = require('./index');
const connect = async () =>{
    try{
        await mongoose.connect(MONGO_URL, {});
        console.log("Database connected");
    } catch(e){
        console.log("Couldn't connect to" + MONGO_URI + "because" + error);
    }
}
module.exports = {connect};