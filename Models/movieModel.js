const mongoose = require('mongoose');

// movies schema
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field'],
        unique: true
    },
    description: String,
    duration: {
        type: Number,
        required: true
    },
    // ratings: Number
    ratings: {
        type: Number,
        default: 1.0
    }
})

// creating model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;