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

app.post('/api/movie/add', (req, res) => {
    
    const { 
        Title, Comment, Rated,
        Released, Runtime, Genre,
        Director, Writer, Actors,
        Plot, Language,
        Country, Awards, Poster,
        ImdbRating, ImdbVotes,
        Schedule
    } = req.body;
    // console.log(Movie.findOne({ Title : Title}) ? "True" : "False");
    Movie.exists({ Title : Title}).then(result => {
        if(result) {
            Movie.updateOne(
                { Title: Title },
                { $push: 
                    { Schedule: Schedule }
                }).then(result => res.json(result))
                .catch(err => res.status(400).json({ success: false}));
        } else {
            const movie = new Movie({
                Title, Comment, Rated,
                Released, Runtime, Genre,
                Director, Writer, Actors,
                Plot, Language, Country,
                Awards, Poster, ImdbRating,
                ImdbVotes, Schedule
            })
            movie.save()
            .then(movie => {
                res.json(movie)
            })
            .catch(err => res.status(400).json( {success: false }))
            
        }

    })



})


app.listen(8080, () => console.log('Server started on port 8080'));
