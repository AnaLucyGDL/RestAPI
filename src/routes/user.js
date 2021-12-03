// Endpoint for user
const express = require('express');

const router = express.Router();

// Create user
router.post('/users', (req, res) => {
    res.send('Create user');
});

module.exports = router;
