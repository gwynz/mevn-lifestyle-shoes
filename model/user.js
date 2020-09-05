const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);