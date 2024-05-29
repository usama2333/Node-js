// mounting a route using express middleware
const express = require('express');
const { getAllMovies, createMovie, getMovie, updateMovie, deleteMovie } = require('../Controllers/moviesController');

const router = express.Router();

router.param('id',(req, res, next, value) => {
    console.log('movie id + ' + value)
    next()
})

router.route('/')
    .get(getAllMovies)
    .post(createMovie)

    router.route('/:id')
    .get(getMovie)
    .patch(updateMovie)
    .delete(deleteMovie)

module.exports = router;
