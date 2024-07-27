// import Package
const express = require('express');
const fs = require('fs')
const morgan = require('morgan')
const movieRouter = require('./Routes/moviesRoutes')

let app = express();
let movies = JSON.parse(fs.readFileSync('./Data/movies.json'))

// custom middleware
const logger = function (req, res, next) {
    console.log('This is custom logger middleware')
    next(); // goes to next middleware or execute code
}
// app.use is used for middlewares like custom middleware

app.use(express.json()) // to display  console.log(req.body) in post

// morgan middleware gives the information of the request 
// log request information in vs terminal when hiting api 
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')) //GET /api/v1/movies/ 200 2.135 ms - 406 gives the console like this
}



//access the static file directly through browser using
//http://127.0.0.1:3000/templates/demo.html
//public folder contains templates/demo.html
app.use(express.static('./public')) //folder where static file is placed

app.use(logger)
app.use((req, res, next) => {
    //adding properties to the req object
    req.requestedAt = new Date().toISOString();
    // req.name = "usama ahmed";
    next();
})

// Route http method + url
app.get('/', (req, res) => {
    // res.status(200).send('Hello from express server');
    res.status(200).json({ message: 'Hello world', status: 200 });
})

// creating endpoints routes for movies
// app.get('/api/v1/movies',getAllMovies)
// app.get('/api/v1/movies/:id',getMovie )
// app.post('/api/v1/movies', createMovie)
// app.patch('/api/v1/movies/:id', updateMovie)
// app.delete('/api/v1/movies/:id', deleteMovie )

//Alternate of routes in a easy way 
//Route handler function is also know as middleware

// app.route('/api/v1/movies')
//     .get(getAllMovies)
//     .post(createMovie)

// app.route('/api/v1/movies/:id')
//     .get(getMovie)
//     .patch(updateMovie)
//     .delete(deleteMovie)

app.use('/api/v1/movies',movieRouter)

module.exports = app;