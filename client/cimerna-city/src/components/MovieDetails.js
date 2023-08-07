import { useState, useEffect } from 'react';

function MovieDetails({ movie }) {
    return (
        <>
        <div className="Trailer"></div>
        <div className="movie-detail-container">
            <div className="movie-detail-title"> {movie.Title} </div>
            <div className="movie-date-container">
                <div> {movie.Released} </div>
                <div> {movie.Runtime} </div>
            </div>
            <div className="movie-fullplot"> {movie.Plot} </div>
            <div>
                <div> Genre </div>
                <div> {movie.Genre} </div>
            </div>
            <div>
                <div> Director </div>
                <div> {movie.Director} </div>
            </div>
            <div>
                <div> Writer </div>
                <div> {movie.Writer} </div>
            </div>
            <div>
                <div> Actors </div>
                <div> {movie.Actors} </div>
            </div>
            <div>
                <div> Language </div>
                <div> {movie.Language} </div>
            </div>
            <div>
                <div> Rated </div>
                <div> {movie.Rated} </div>
            </div>
            <div>
                <div> imdbRating </div>
                <div> {movie.imdbRating} </div>
            </div>
        </div>
        <img className="movie-poster" src={movie.Poster} alt="Movie Poster"/>

        
        </>
    );
}

export default MovieDetails;