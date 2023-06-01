const controller = require('./index');
const imageService = require('../services/image.services');

const getImageByUser = async (req, res, next) => {
    try {
        const ownerId = req.cookies.login;
        if(!ownerId)
            return controller.sendSuccess(res, 300, "Not login");
        const image = await imageService.getImagesByUser(ownerId);
        return controller.sendSuccess(res, 200, image.message, image.data);
    } catch(e) {
        return controller.sendError(res);
    }
}
const deleteImage = async (req, res, next) => {
    try {
        const ownerId = req.cookies.login;
        if (!ownerId)
            return controller.sendSuccess(res, 300, "Not login");
        const { id } = req.params;
        const image = await imageService.deleteImage(id, ownerId);
        if(!image.success)
            return controller.sendSuccess(res, 300, image.message);
        return controller.sendSuccess(res, 200, image.message);
    } catch (e) {
        return controller.sendError(res);
    }
}

module.exports = {
    getImageByUser,
    deleteImage
}