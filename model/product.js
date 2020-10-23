const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    number: Number,
    price: Number,
    id_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    enable: Boolean,
    images: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductImage"
    }]
});

module.exports = mongoose.model('Product', productSchema);