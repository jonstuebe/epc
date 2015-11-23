var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/epc');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));