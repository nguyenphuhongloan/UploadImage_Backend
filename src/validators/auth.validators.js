const joi = require("joi");
const schemas = {
    login: joi.object().keys({
        email: joi.string().email({ minDomainSegments: 2, }).required(),
        password: joi.string().min(6).required(),
    }),
    register: joi.object().keys({
        name: joi.string().required(),
        phone: joi.string().pattern(/^0[0-9]{9}$/).required(),
        address: joi.string().required(),
        email: joi.string().email({ minDomainSegments: 2, }).required(),
        password: joi.string().min(6).required(),
    })
}
module.exports = schemas;