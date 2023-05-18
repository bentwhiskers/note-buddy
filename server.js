// Import required packages/ import routes
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRouter = require('/routes/apiRoutes');
const htmlRouter = require('/routes/htmlRoutes');

// Initialize an instance of Express.js
const app = express();

// Specify the port that Express.js will run on
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Set up Express.js to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public/assets', express.static(__dirname + '/public/assets'));

// Start server to begin listening 
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
});