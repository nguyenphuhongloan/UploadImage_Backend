const driver = require('../config/upload');
const service = require('./index');
const { FOLDER } = require('../config/index');
const imageService = require('./image.services');
const stream = require('stream');
const upload = async (files, ownerId) => {
    try {
        let arrImage = [];
        for (const file of files) {
            const bufferStream = new stream.PassThrough();
            bufferStream.end(file.buffer);
            const createFile = await driver.files.create({
                requestBody: {
                    name: file.originalname + "-" + Date.now() + "-" + Math.round(Math.random() * 1E9),
                    mimeType: file.mimeType,
                    parents: [FOLDER]
                },
                media: {
                    mimeType: file.mimeType,
                    body: bufferStream
                }
            });
            if (!createFile) {
                return service.sendError("Upload file failed");
            }
            const isSetPublicFileSuccess = await setPublicFile(createFile.data.id);
            if (!isSetPublicFileSuccess.success) {
                return isSetPublicFileSuccess;
            }
            const url = await getLinkFile(createFile.data.id);
            if (!url.success) {
                return url;
            }
            const imageInfo = {
                name: createFile.data.name,
                ownerId: ownerId,
                url: url.data
            }
            const image = await imageService.createImage(imageInfo);
            arrImage.push(image['data']);
        }
        return service.sendSuccess("Upload file successfully", {
            files: arrImage
        })
    } catch (e) {
        return service.sendError();
    }
};
const setPublicFile = async (id) => {
    try {
        const publicFile = await driver.permissions.create({
            fileId: id,
            requestBody: {
                role: "reader",
                type: "anyone"
            }
        });
        if (!publicFile) {
            return service.sendError("Set public file failed");
        }
        return service.sendSuccess("Set public file successfully");
    } catch (e) {
        return service.sendError()
    }
};
const getLinkFile = async (id) => {
    try {
        const getURL = await driver.files.get({
            fileId: id,
            fields: "webContentLink"
        });
        if (!getURL) {
            return service.sendError("Get url file failed");
        }
        const imageURL = getURL.data.webContentLink.replace("download", "view");
        return service.sendSuccess("Get url file successfully", imageURL);
    } catch (e) {
        return service.sendError();
    }
}

module.exports = {
    upload
}