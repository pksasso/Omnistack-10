const UserController = require('../src/controllers/DevController');

const express = require('express');
const routes = express.Router();

routes.get('/devs', UserController.index);
routes.post('/devs', UserController.store);
routes.delete('/devs', UserController.delete);

routes.post('/edit', UserController.update);

module.exports = routes;
