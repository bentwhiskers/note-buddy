// Import required packages/ import routes
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
// Initialize an instance of Express.js
const app = express();

// Specify the port that Express.js will run on
const PORT = process.env.PORT || 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Set up Express.js to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Start server to begin listening 
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App listening at http://0.0.0.0:${PORT} 🚀`)
});