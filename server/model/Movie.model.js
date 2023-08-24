const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema({
    Title: String,
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: Array,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Ratings: Array,
    imdbRating: String,
    imdbVotes: String,
    Schedule: [{ 
        _id: mongoose.Types.ObjectId,
        fullDate: Date,
        date: Date,
        start: Date,
        tickets: Number,
        roomID: mongoose.Types.ObjectId
    }]
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
