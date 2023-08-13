// Import required packages/ import routes
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const uuid = require('./helpers/uuid.js');
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
app.use('/api', api);

// route to the notes.html file
app.get("/notes", (req, res) => {
   
  res.sendFile(path.join(__dirname, "public/notes.html"));
});


app.use("*", (req, res) => {
    
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start server to begin listening 
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
});