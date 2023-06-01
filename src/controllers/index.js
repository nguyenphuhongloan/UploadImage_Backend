const sendSuccess = (res, status = 200, message = "success", data) => {
    return res.status(status).json({
        success: status === 200 ? true : false,
        message: message,
        data: data
    })
}
const sendError = (res, status = 500, message = "Internal server error ") => {
    return res.status(status).json({
        success: status,
        message: message,
    })
}

module.exports = {
    sendSuccess,
    sendError
}