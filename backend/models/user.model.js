const mongoose = require('mongoose');
const model = mongoose.model;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const User = model('User', userSchema);

module.exports = User;