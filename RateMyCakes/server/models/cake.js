const mongoose = require('mongoose');

var cakeSchema = new mongoose.Schema({
    baker: {type: String, require: [true, "A baker name is required."]},
    image: {type: String, require: [true, "A cake image is required."]},
    ratings: [{
        stars: {type: Number},
        comment: {type: String}
    }]
}, {timestamps: true});

module.exports = mongoose.model('cakes', cakeSchema);