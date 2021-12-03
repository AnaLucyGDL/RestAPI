// Code for the server
const express = require('express');
const env = require('node-env-file');
const app = express();

env('./.env');
const port = process.env.PORT || 9001;

app.listen(port, () => console.log(`Server working on port ${port}`));
