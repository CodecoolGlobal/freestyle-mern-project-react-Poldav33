const mongoose = require('mongoose');
let Movie = require('./model/Movie.model.js');
let Room = require('./model/Movie.model.js')
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

const removeWrongDateSchedules = (movies, filter) => {
    movies.map(movie => {
        const filteredSchedules = movie.Schedule.filter(schedule => schedule.date === filter);
        filteredSchedules.sort((a,b) => a.start.localeCompare(b.start));
        movie.Schedule = filteredSchedules;
    });

}   

app.post('/api/movies/filter', async (req,res) => {
    try {
        const filteredMovies = await Movie.find({ "Schedule.date" : req.body.filter });
        removeWrongDateSchedules(filteredMovies, req.body.filter);
        res.send(filteredMovies);
    } catch (error) {
        console.log(error);
    }
} );

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
    .then(data =>  data)
    .catch(error => console.error(error))
})

app.get('/api/rooms', async (req, res, next) => {
    try {
        const rooms = await Room.find({})
        res.status(200).json(rooms)
    } catch (error) {
        next(error)
    }
})

app.post('/api/rooms', async (req, res, next) => {
    try {
        const newRoom = new Room({...req.body})
        newRoom.save()
        res.status(200)
    } catch (error) {
        next(error)
    }
})

app.get('/api/rooms/:id', async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
})

app.patch('/api/rooms/:id', async (req, res, next) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, )
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
})

app.delete('/api/rooms/:id', async (req, res, next) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id)
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
})

app.listen(8080, () => console.log('Server started on port 8080'));
