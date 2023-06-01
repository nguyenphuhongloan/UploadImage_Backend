const USER = require('../models/user.model');
const bcrypt = require('bcryptjs');
const service = require('./index');

const login = async (body) => {
    try{
        const user = await USER.findOne({
            email: body.email
        });
        if(user){
            const isPasswordMatched = await bcrypt.compare(body.password, user.password)
            if(isPasswordMatched){
                delete user._doc["password"];
                return service.sendSuccess("Login success", user);
            }
        }
        return service.sendError("Incorrect username or password")
    } catch(e){
        return service.sendError();
    }
}

const register = async (body) => {
    try {
        const user =await USER.findOne({
            email: body.email
        });
        if (user) 
           return service.sendError("Email already registered");
        const hashPassword = await bcrypt.hash(body.password, 8);
        body.password = hashPassword;
        const newUser = await USER.create(body);
        if(!newUser)
            service.sendError("Register failed");
        delete newUser._doc["password"];
        return service.sendSuccess("Register success", newUser);
    } catch (e) {
        return service.sendError();
    }
}



module.exports = {
    login,
    register
}