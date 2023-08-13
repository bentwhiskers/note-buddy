const notes = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');

notes.get('/', (req,res) => {
    fs.readfile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        } else {
            res.send(JSON.parse(data));
        }
    });
});

notes.post('/', (req,res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid.v4(),
        };
        
        fs.readFile('./db/db.json', 'utf-8', (err, data) => {
            if (err) {
                throw err;
            } else {
                const parsedData = JSON.parse(data);
                parsedData.push(newNote);
            }
        });
        
        fs.writeFile('./db/db.json', JSON.stringify(parsedData), (writeErr) => {
            if (writeErr) {
                console.log(writeErr);
            } else {
                console.log(`New note was added with an id of  ${newNote.id}`);
            };
        });

        const response = {
            status: 'success',
            body: newNote,
        };
    
        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error posting new note');
    }
    
    
});

notes.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
  
    const delNote = notes.findIndex(note => note.id ==id);
  
    notes.splice(delNote, 1);
    return res.send();
});

module.exports = notes;


  