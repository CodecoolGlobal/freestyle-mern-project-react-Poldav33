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
            return Movie.updateOne(
                { Title: Title },
                { $push: 
                    { Schedule: Schedule }
                }).then(result => res.json(result))
        } else {
            const movie = new Movie({
                Title, Comment, Rated,
                Released, Runtime, Genre,
                Director, Writer, Actors,
                Plot, Language, Country,
                Awards, Poster, ImdbRating,
                ImdbVotes, Schedule
            })
            return movie.save()
            .then(movie => {
                res.json(movie)
            }) 
        }
    }).catch(err => res.status(400).json( {success: false }))



})

app.put('/api/movies/:id', (req, res) => {
    Movie.findOneAndUpdate({ "Schedule._id": `${req.params.id}` }, 
    {$set: { "Schedule": req.body.newData } })
    .then(data => {console.log(data); return data})
    .catch(error => console.error(error))
})


app.listen(8080, () => console.log('Server started on port 8080'));
