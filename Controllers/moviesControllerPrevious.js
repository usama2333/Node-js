const fs = require('fs')
let movies = JSON.parse(fs.readFileSync('./Data/movies.json'))

exports.checkId = (req,res,next,value) => {
    console.log('movie id + ' + value)

    const movie = movies.find(el => el.id == id)

    
    // if (!movie) {
    //     return res.status(404).json({
    //         status: 'failed',
    //         message: 'Movie with Id ' + id + ' is not found'
    //     })
    // }
}

//Route handler fuction
exports.getAllMovies = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestedAt,
        // name: req.name,
        count: movies.length,
        data: {
            movies: movies
        }
    })
}

exports.getMovie = (req, res) => {
    const id = +req.params.id
    const movie = movies.find(el => el.id == id)

    // if (!movie) {
    //     return res.status(404).json({
    //         status: 'failed',
    //         message: 'Movie with Id ' + id + ' is not found'
    //     })
    // }

    res.status(200).json({
        status: 'success',
        data: {
            movie: movie
        }
    })

}

exports.updateMovie = (req, res) => {
    let id = +req.params.id;
    let movieToUpdate = movies.find(el => el.id == id)

    // if (!movieToUpdate) {
    //     return res.status(404).json({
    //         status: "Failed",
    //         message: "Cannot found any movie with id " + id + " id"
    //     })
    // }

    let index = movies.indexOf(movieToUpdate)

    Object.assign(movieToUpdate, req.body)
    movies[index] = movieToUpdate;

    fs.writeFile('./Data/movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: 'success',
            data: {
                movie: movieToUpdate
            }
        })
    })
}

exports.deleteMovie = (req, res) => {
    const id = +req.params.id;
    const movieToDelete = movies.find(el => el.id === id);
    // if (!movieToDelete) {
    //     return res.status(404).json({
    //         status: 'failed',
    //         message: 'Movie with Id ' + id + ' is not found'
    //     })
    // }
    const index = movies.indexOf(movieToDelete);

    movies.splice(index, 1);

    fs.writeFile('./Data/movies.json', JSON.stringify(movies), (err) => {
        res.status(204).json({
            status: 'success',
            data: {
                movie: null
            }
        })
    })
}

exports.createMovie = (req, res) => {
    // console.log(req.body)

    const newId = movies[movies.length - 1].id + 1;
    const newMovie = Object.assign({ id: newId }, req.body)
    movies.push(newMovie)

    fs.writeFile('./Data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: 'success',
            data: {
                movie: newMovie
            }
        })
    })

    // res.send('Created')
}