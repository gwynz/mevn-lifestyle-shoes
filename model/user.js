const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
    poin: Number
});

module.exports = mongoose.model('User', UserSchema);