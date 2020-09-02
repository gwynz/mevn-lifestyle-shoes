const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('News', characterSchema);