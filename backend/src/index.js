//const express = require('express');
const Sequelize = require('sequelize');
const dbConfig = require('./config/database');

const Dev = require('./models/Dev');

const connection = new Sequelize(dbConfig);

Dev.init(connection);

module.exports = connection;
