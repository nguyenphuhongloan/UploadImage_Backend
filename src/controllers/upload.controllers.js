const controller = require('./index');
const uploadService = require('../services/upload.services');

const upload = async (req, res, next) => {
    try {
        if (!req.cookies.login)
            return controller.sendSuccess(res, 300, "Not login");
        const ownerId = req.cookies.login;
        const resService = await uploadService.upload(req.files, ownerId);
        if (!resService.success) {
            return controller.sendSuccess(res, 300, resService.message);
        }
        controller.sendSuccess(res, 200, resService.message, resService.data);
    } catch (e) {
        return controller.sendError(res);
    }
}

const checkTotalFileSize = (req, res, next) => {
    try {
        size = 0;
        for (const file of req.files) {
            size += file.size
        }
        if(size >= 10 * 1024 * 1024)
            return controller.sendSuccess(res, 300, "Total files size must < 10 <MB");
        next();
    } catch (e) {
        return controller.sendError(res);
    }
}

module.exports = {
    upload,
    checkTotalFileSize
}