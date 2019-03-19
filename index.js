// Step 1
// In terminal, run 'yarn' in root folder to bring in packages

// Step 2
// In terminal, run 'yarn add express' in root folder

// Step 3
// Create an index.js file at the root level if one doesn't already exists. This is where you'll write the API

// Step 4
// Add the line below to pull in express (similar to import from front end)
const express = require('express');

// Step 8
// this imports the file that has our request methods
const db = require('./data/db.js')

// Step 5
// Generates a new server
const server = express();

// Step 9
// add middleware to make POST and PUT work
server.use(express.json());

// Step 10
// Create the requests ***********************

    // GET - retrieve all users
    server.get('/api/users', (req, res) => {
        db
            .find()
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(500).json({ error: "The users information could not be retrieved." });
            })
    });

    // GET - retrieve specific user by id
    server.get('/api/users/:id', (req, res) => {
        const id = req.params.id;

        db
            .findById(id)
            .then(user => {
                if(user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({ message: "The user with the specified ID does not exist." });
                }
            })
            .catch(error => {
                res.status(500).json({ error: "The users information could not be retrieved." });
            })
    })

    // POST - add new user
    server.post('/api/users', (req, res) => {
        const userInfo = req.body;
        
        if(!userInfo.name || !userInfo.bio) {
            res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
            return
        }
        
        db
            .insert(userInfo)
            .then(user => {
                res.status(201).json(user);
            })
            .catch(error => {
                res.status(500).json({ error: "There was an error while saving the user to the database" });
            })
    });

    // DELETE - delete specific user by id
    server.delete('/api/users/:id', (req, res) => {
        const id = req.params.id;

        db
            .remove(id)
            .then(deleted => {
                if(deleted) {
                    res.status(204).end();
                } else {
                    res.status(404).json({ message: "The user with the specified ID does not exist." });
                }
            })
            .catch(error => {
                res.status(500).json({ error: "The user could not be removed" });
            })
    });

    // PUT - changes specific user by id
    server.put('/api/users/:id', (req, res) => {
        const { id } = req.params;
        const changes = req.body;

        if(!changes.name || !changes.bio) {
            res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
            return;
        }

        db
            .update(id, changes)
            .then(updated => {
                if(updated) {
                    res.status(200).json(updated);
                } else {
                    res.status(404).json({ message: "The user with the specified ID does not exist." });
                }
            })
            .catch(error => {
                res.status(500).json({ error: "The user information could not be modified." });
            })
    })

// End of requests ***************************

// Step 6
// Tell the server to listen for traffic at a particular port
server.listen(4000, () => {
    console.log('API up and running on port 4k')
});

// Step 7
// In terminal, run 'yarn server' to get the server up and running on the port specified in Step 6







