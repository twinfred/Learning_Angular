const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular_authors');
require('./../models/author');