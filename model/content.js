const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new mongoose.Schema({
    title_id: {
        type: Schema.Types.ObjectId,
        ref: 'News'
    },
    text: {
        type: String,
        required: false
    },
    urlImage: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Content', characterSchema);