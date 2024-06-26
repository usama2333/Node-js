
const Movie = require('../Models/movieModel')


//Route handler fuction

exports.getAllMovies = async (req, res) => {
    try {
        console.log(req.query); //receives extra quries from url for filtering

        const movies = await Movie.find();
    
        res.status(200).json({
            status: 'success',
            length: movies.length,
            data: {
                // movies: movies
                movies
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'Failed',
            message: err.message
        })
    }
    
}

exports.getMovie = async (req, res) => {
    // const movie = await Movie.find({_id: req.params.id})
    try {
        const movie = await Movie.findById(req.params.id);
    
        res.status(200).json({
            status: 'success',
            data: {
                // movie: movie
                movie
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'Failed',
            message: err.message
        })
    }
    
}

exports.createMovie = async (req, res) => {

//      also do that
//    const testMovie = new Movie({});
//    testMovie.save();

try {
    const movie = await Movie.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            // movie: movie
            movie
        }
    })
} catch(err) {
    res.status(400).json({
        status: 'Failed',
        message: err.message
    })
}

}

exports.updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        res.status(200).json({
            status: "success",
            data: {
                movie: updatedMovie
            }
        })
    }catch(err) {
        res.status(400).json({
            status: 'Failed',
            message: err.message
        })
    }

}

exports.deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }


    
}

