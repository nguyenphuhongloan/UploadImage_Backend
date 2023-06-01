const body = (schemas) => { 
    return (req, res, next) => {
        const validatorResult = schemas.validate(req.body);
        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error.details);
        }
        if (!req.query)
            req.query = {};
        const obj = Object.assign(validatorResult.value, req.body);
        req.body = obj;
        next();
    }
}

module.exports = {
    body
}