const noteRoutes = require('./apiRoutes.js');
const express = require('express');
const app = express();

app.use('/notes', noteRoutes);

module.exports = app;