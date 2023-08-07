const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema({
    title: String,
    released: Number,
    runtime: Number,
    genre: Array,
    language: String,
    director: String,
    writer: String,
    plot: String,
    awards: String,
    poster: String
})

const Movie = model('Movie', movieSchema);

modul.export = Movie;