'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: { type: String, uppercase: true, enum: ['AMAZING AUTOBIOGRAPHIES', 'MYSTIQUE OF MYSTERIES', 'COMEDIC CHAOS'] }
});

const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;
