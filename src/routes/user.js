// Endpoint for user
const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

// Create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body); // Create a user with the data from the request in body
    user
        .save() // Save the user in the DB
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

// Get all users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

// Get a user
router.get('/users/:id', (req, res) => {
    const { id } = req.params; // Get the ID that is in the request's params
    userSchema
        .findById(id)
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

// Update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params; // Get the ID that is in the request's params
    const { name, age, email } = req.body; // Get the fields that can be updated
    userSchema
        .updateOne({ _id:id }, { $set: {name, age, email} }) // To which element will it refers, and the fields to update
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

// Delete a user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params; // Get the ID that is in the request's params
    userSchema
        .deleteOne({ _id:id }) // To which element will it refers to delete it
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

module.exports = router;
