//const express = require('express');
const Sequelize = require('sequelize');
const dbConfig = require('./config/database');

const User = require('../src/models/User');

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;
//const dotenv = require('dotenv');
//const mongoose = require('mongoose');
// const cors = require('cors');

// const routes = require('./routes');

// const app = express();

// dotenv.config({
//   path: './.env'
// })

// mongoose.connect(process.env.NODE_ENV_MONGO_ACCESS, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// app.use(cors());
// app.use(express.json());
// app.use(routes);


// app.listen(3333);