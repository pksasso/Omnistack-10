const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

dotenv.config({
  path: './.env'
})

mongoose.connect(process.env.NODE_ENV_MONGO_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);