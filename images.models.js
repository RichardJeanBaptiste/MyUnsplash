const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: {
        type: String,
    },
    link: {
        type: String,
    }
})

const Image = mongoose.model('Images', ImageSchema);

module.exports = {Image};