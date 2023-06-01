const IMAGE = require('../models/image.model');
const service = require('../services/index');

const getImagesByUser = async (ownerId) => {
    try {
        const image = await IMAGE.find({
            ownerId: ownerId
        });
        if (!image)
            service.sendError("Get images failed");
        return service.sendSuccess("Get images success", image)
    } catch (e) {
        return service.sendError();
    }
}

const createImage = async (data) => {
    try{
        const image = await IMAGE.create(data);
        if (!image)
            return service.sendError("Save info image failed");
        return service.sendSuccess("Save success", image)
    } catch(e){
        return service.sendError();
    }
}

const deleteImage = async (id, ownerId) => {
    try {

        const image = await IMAGE.findOneAndDelete({
            _id: id,
            ownerId: ownerId
        });
        if (image == null || !image)
            return service.sendError("Delete failed");
        return service.sendSuccess("Delete success", image)
    } catch (e) {
        return service.sendError();
    }
}

module.exports = {
    getImagesByUser,
    createImage,
    deleteImage
}