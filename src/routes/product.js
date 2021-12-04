// Endpoint for products
const express = require('express');
const productSchema = require('../models/product');

const router = express.Router();

// Create product
router.post('/product', (req, res) => {
    const product = productSchema(req.body); // Create a product with the data from the request in body
    product
        .save() // Save the product in the DB
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

// Get all products
router.get('/product', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

// Get a product
router.get('/product/:id', (req, res) => {
    const { id } = req.params; // Get the ID that is in the request's params
    productSchema
        .findById(id)
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

// Update a product
router.put('/product/:id', (req, res) => {
    const { id } = req.params; // Get the ID that is in the request's params
    const { name, price, image, condition, category, description } = req.body; // Get the fields that can be updated
    productSchema
        .updateOne({ _id:id }, { $set: {name, price, image, condition, category, description} }) // To which element will it refers, and the fields to update
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

// Delete a product
router.delete('/users/:id', (req, res) => {
    const { id } = req.params; // Get the ID that is in the request's params
    productSchema
        .deleteOne({ _id:id }) // To which element will it refers to delete it
        .then((data) => res.json(data)) // What to do if it's correct
        .catch((err) => res.json({ message: err }));
});

module.exports = router;