const Movie = ({ movie, onClick }) => {
  return (<div key={movie["_id"]} className="movie-card">
    <img src={movie.Poster} alt="Poster" className="movie-poster"/>
    <div className="movie-details-container">
      <div className="movie-title" onClick={() => onClick(movie)}> {movie.Title} </div>
      <div className="movie-minor-details">
        <div>{movie.Rated}</div>
        <div>{movie.Genre}</div>
        <div>{movie.Runtime}</div>
      </div>
      <div>{movie.Language}</div>
      <div>{movie.Plot}</div>
    </div>
  </div>);
}

export default Movie;