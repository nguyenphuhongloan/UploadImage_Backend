
const defaultModel = {
    string: {
        type: String,
    },
    stringR: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String, match: /^.{8,}$/ 
    },
    phoneNumber: { type: String, match: /^0[0-9]{9}$/ },
}

module.exports = {
    defaultModel
}