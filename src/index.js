// Code for the server
const express = require('express');
const env = require('node-env-file');
const app = express();

env('./.env');
const port = process.env.PORT || 9001;

// Routes

// Main route of the app
app.get('/', (req, res) => { // req - Request object / res - Response object
    res.send('Welcome to my API');
})

app.listen(port, () => console.log(`Server working on port ${port}`));
