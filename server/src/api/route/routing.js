const express = require('express');
const route = express.Router();

const controllerblog = require('../control/blog');
const controlleruser = require('../control/login');

route.post('/blogs',controllerblog.create);
route.get('/blogs',controllerblog.read);
route.put('/blogs/:id',controllerblog.update);
route.delete('/blogs/:id',controllerblog.delete);

route.post('/signup',controlleruser.signup);
route.post('/login',controlleruser.login);

module.exports = route;