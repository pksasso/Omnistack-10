// const { Router } = require('express');
// const DevController = require('./controllers/DevController');
const UserController = require('../src/controllers/DevController');
// const SearchController = require('./controllers/SearchController');
const express = require('express');
const routes = express.Router();


//const routes = Router();

routes.get('/devs', UserController.index);
routes.post('/devs', UserController.store);
// routes.delete('/devs', DevController.delete);

// routes.post('/edit', DevController.update);

// routes.get('/search', SearchController.index);

module.exports = routes;