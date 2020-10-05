const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    products: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        }
    ]
});

module.exports = mongoose.model('Category', CategorySchema);