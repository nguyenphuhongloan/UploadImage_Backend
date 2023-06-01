const multer = require("multer");
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, 
        fieldSize: 100 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const typeAllow = ['image/jpeg', 'image/png', 'image/jpg'];
        if (typeAllow.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb('Only image files are allowed');
        }
    }
});
module.exports = upload
