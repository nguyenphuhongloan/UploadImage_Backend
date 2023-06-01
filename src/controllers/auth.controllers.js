const controller = require('./index');
const authService = require('../services/auth.services');

const login = async (req, res) => {
    try {
        const resService = await authService.login(req.body);
        if (!resService.success) {
            return controller.sendSuccess(res, 300, resService.message);
        }
        await res.cookie("login", resService.data._id, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        });
        return controller.sendSuccess(res, 200, resService.message, resService.data);
    } catch (e) {
        return controller.sendError(res);
    }
}

const register = async (req, res) => {
    try {
        const resService = await authService.register(req.body);
        if (!resService.success) {
            return controller.sendSuccess(res, 300, resService.message);
        }
        return controller.sendSuccess(res, 200, resService.message, resService.data);
    } catch (e) {
        controller.sendError(res);
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('login');
        return controller.sendSuccess(res, 200, "Logout success");
    } catch (e) {
        return controller.sendError(res);
    }
}


module.exports = {
    login,
    register,
    logout
}