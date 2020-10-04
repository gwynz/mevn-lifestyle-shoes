const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    Type: String
});

module.exports = mongoose.model('Property', PropertypeSchema);