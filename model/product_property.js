const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    id_property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property'
    },
    value: String
});

module.exports = mongoose.model('Property', PropertypeSchema);