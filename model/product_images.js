const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    url: String,
    name: String,
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
});

module.exports = mongoose.model('ProductImage', Schema);