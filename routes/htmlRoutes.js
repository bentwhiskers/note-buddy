const path = require('path');
const express = require('express');
const htmlRouter = require('express').Router();

const app = express();

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = htmlRouter;