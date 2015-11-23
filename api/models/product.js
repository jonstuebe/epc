var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title: String,
    brand: String,
    description: String,
    image: String,
    images: Array,
    details: Array,
    dateAdded: { type: Date, default: Date.now }
});

var model = mongoose.model('Product', schema);
exports.model = model;