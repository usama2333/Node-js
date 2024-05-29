const mongoose = require('mongoose');

// movies schema
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field'],
        unique: true,
        trim: true   //if can remove whitespaces before and after the name
    },
    description: {
        type: String,
        required: [true, 'Description is required field'],
        trim: true
    },
    duration: {
        type: Number,
        // required: true
        required: [true, 'Duration is required field']
    },
    // ratings: Number
    ratings: {
        type: Number,
        // default: 1.0
    },
    totalRating: {
        type: Number
    },
    releaseYear: {
        type: Number,
        required: [true, 'Release year is required field']
    },
    releaseDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    genres: {
        type: [String],  // String array
        required: [true, 'Genrus is required field']
    },
    directors: {
        type: [String],  // String array
        required: [true, 'Directors is required field']
    },
    coverImage: {
        type: [String],  // String array
        required: [true, 'Cover Image is required field']
    },
    price: {
        type: Number,
        required: [true, 'Price is required field']
    },

})

// creating model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;