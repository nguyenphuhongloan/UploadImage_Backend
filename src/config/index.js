require('dotenv').config();

const configEnv = {
    PORT: process.env.PORT,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    MONGO_URL: process.env.MONGO_URL,
    REDIRECT_URL: process.env.REDIRECT_URL,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    FOLDER: process.env.FOLDER,
}

module.exports = configEnv;