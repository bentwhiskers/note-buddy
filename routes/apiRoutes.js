const fs = require('fs');
const db = require('../db/db.json');
const uuid = require('../helpers/uuid.js');
var apiRouter = require('express').Router();

// GET Route to read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let userData = JSON.parse(data);

        res.json(userData)
    });
});

// POST Route to recieve a new note to save on the request body and add it to the db.json file,
// then returns the new note to client. Gives it a unique ID when it is saved. 
app.post('/api/notes', (req, res) => {
    // grabs notes from body of request
    const newNote = req.body;
    // gives each note a unique ID
    newNote.id = uuid();
    // pushes each new note to the array
    db.push(newNote);
    // updates the json file with the new object
    fs.writeFileSync('./db/db.json', JSON.stringify(db));

    res.json(db)
})

module.exports = apiRouter;