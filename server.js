const mongoose = require('mongoose');
// very first import env in server then use it any file you want
const dotenv = require('dotenv');  //npm install dotenv
dotenv.config({path: './config.env'}) //env file path


const app = require("./app");

// for express env
// console.log(app.get('env'))

//for node env
// console.log(process.env)

// mongodb connection
mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn) => {
    // console.log(conn);
    console.log('DB Connection Successfull');
}).catch((error) => {
   console.log('Some error has occured');
})



// const testMovie = new Movie({
//     name : "End Game",
//     description: "Fighting",
//     duration: 139,
//     rating: 4.5
// });

// save method can save the data in collection
// testMovie.save()
// .then(doc => {
//     console.log(doc)
// })
// .catch(err => {
//     console.log("Error occured: " + err)
// })

//Create a server
// const port = 3000;

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server has started...')
}) 