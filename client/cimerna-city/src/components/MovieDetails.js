import { useEffect, useState } from "react";

function MovieDetails({ movie, date }) {
    const [videoURL, setVideoURL] = useState("");
    const defaultYtURL = "https://www.youtube.com/embed/";
    useEffect(() => {
        const getTrailerId = async () => {
            const fetchData = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBesseOw_N9o07QJ8mh1iTXf3RpxZvq1Ks&type=video&q=${movie.Title}trailer`)
            const searchData = await fetchData.json();
            console.log(searchData)
            setVideoURL(defaultYtURL + searchData.items[0].id.videoId.toString())
            console.log(videoURL)
        }
        getTrailerId();
        
    }, []);

    return (
        <>
        <div className="trailer">
            <iframe className="trailer-video" src={videoURL}/>
        </div>
        <div className="movie-collection-card">
            <div className="movie-detail-container">
                <div className="movie-detail-title"> {movie.Title} </div>
                <div className="movie-date-container">
                    <div> {date} </div>
                    <div> {movie.Runtime} </div>
                </div>
                <div className="movie-fullplot"> {movie.Plot} </div>
                <div className="movie-genres">
                    <div> {movie.Genre.includes(",") ? "Genres" : "Genre"}</div>
                    <div> {movie.Genre} </div>
                </div>
                <div className="movie-director">
                    <div> Director </div>
                    <div> {movie.Director} </div>
                </div>
                <div className="movie-writer">
                    <div> Writer </div>
                    <div> {movie.Writer} </div>
                </div>
                <div className="movie-actors" > 
                    <div> Actors </div>
                    <div> {movie.Actors} </div>
                </div>
                <div className="movie-language">
                    <div> Language </div>
                    <div> {movie.Language} </div>
                </div>
                <div className="movie-rated">
                    <div> Rated </div>
                    <div> {movie.Rated} </div>
                </div>
                <div className="movie-imdbrating">
                    <div> imdbRating </div>
                    <div> {movie.imdbRating} </div>
                </div>
            </div>
            <img className="movie-poster-onselect" src={movie.Poster} alt="Movie Poster"/>
        </div>

        
        </>
    );
}

export default MovieDetails;