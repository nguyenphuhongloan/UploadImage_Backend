const express = require('express');
const route = express.Router();
const Validate = require('../validators/index');
const SchemasValidateAuth = require('../validators/auth.validators');
const Controller = require('../controllers/auth.controllers');

route.post('/login', Validate.body(SchemasValidateAuth.login), Controller.login)
route.post('/register', Validate.body(SchemasValidateAuth.register), Controller.register);
route.post('/logout', Controller.logout);
module.exports = route;