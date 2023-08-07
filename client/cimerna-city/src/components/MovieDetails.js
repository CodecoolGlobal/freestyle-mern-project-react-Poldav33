import { useState, useEffect } from 'react';

function MovieDetails({ movie }) {
    const [longmovie, setLongMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://www.omdbapi.com/?apikey=fc05aea1&t=${movie.Title}&y=${movie.Year}&plot=full`);
            const jsonData = await data.json();
            setLongMovie(jsonData);
            console.log(longmovie);
        }
        fetchData();
    }, [])

    return (
        <>
        <div className="Trailer"></div>
        <div className="movie-detail-title"> {movie.Title} </div>
        <div className="movie-date-container">
            <div></div>
            <div></div>
        </div>
        <div className="movie-fullplot"></div>
        <div>
            <div>Genre</div>
            <div></div>
        </div>
        <div>
            <div>Director</div>
            <div></div>
        </div>
        <div>
            <div>Writer</div>
            <div></div>
        </div>
        <div>
            <div>Actors</div>
            <div></div>
        </div>
        <div>
            <div>Language</div>
            <div></div>
        </div>
        <div>
            <div>Rated</div>
            <div></div>
        </div>
        <div>
            <div>imdbRating</div>
            <div></div>
        </div>
        </>
    );
}

export default MovieDetails;