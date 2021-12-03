// Create users model or schema
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    // Data that a user must have
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);
