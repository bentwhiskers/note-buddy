const apiRoutes = require('./apiRoutes.js');
const express = require('express');

const app = express();

app.use('/notes', apiRoutes);

module.exports = app;