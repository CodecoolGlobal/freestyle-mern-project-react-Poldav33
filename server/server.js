const mongoose = require('mongoose');
const express = require('express');
let Movie = require('./model/Modie');
const app = express();
app.use(express.json());

mongoose.connect("");

app.get('/api/movies', async (req,res) => {
    try {
        const allMovies = Movie.find({});
        res.send(Movie);
    } catch(error) {
        console.log(error);
    }
})


app.listen(8080, () => console.log('Server started on port 3000'));
