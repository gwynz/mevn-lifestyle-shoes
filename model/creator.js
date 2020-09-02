const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nameOfNews: {
        type: String
    }
});

module.exports = mongoose.model('Creator', characterSchema);