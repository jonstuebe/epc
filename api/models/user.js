var mongoose = require('mongoose');

var schema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    meta: [ first_name: String, last_name: String, nickname: String ],
    registered: { type: Date, default: Date.now }
});

var model = mongoose.model('User', schema);
exports.model = model;