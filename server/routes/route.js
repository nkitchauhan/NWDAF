const routes = require('express').Router();

const {register, login} = require('../controller/info');

routes.post('/register',register);
routes.post('/login', login);

module.exports = routes 