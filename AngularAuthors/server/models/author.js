const mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    name: {type: String, require: [true, "An author name is required."]},
}, {timestamps: true});

module.exports = mongoose.model('authors', authorSchema);