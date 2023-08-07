const mongoose = require('mongoose');
let Movie = require('./model/Movie.js');
const express = require('express');
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://polgi:12345@databases-around-us.vkklhfb.mongodb.net/cimerna");

app.get('/api/movies', async (req ,res) => {
    try {
        const allMovies = await Movie.find({});
        res.send(allMovies);
    } catch(error) {
        console.log(error);
    }
})


app.listen(8080, () => console.log('Server started on port 8080'));
