const sendSuccess = (message = "", data = {}) => {
    return {
        success: true,
        message: message,
        data: data
    }
}

const sendError = (message = "An error occurred") => {
    return {
        success: false,
        message: message,
    }
}

module.exports = {
    sendSuccess,
    sendError
}