function MovieDetails({ movie }) {
    return (
        <>
        <div className="trailer">
            <img src={movie.Poster} alt="Nincsenkep" className="trailer"/>
        </div>
        <div className="movie-collection-card">
            <div className="movie-detail-container">
                <div className="movie-detail-title"> {movie.Title} </div>
                <div className="movie-date-container">
                    <div> {movie.Year} </div>
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