import Start from "./Start"

const Movie = ({ movie, onClick, changePageTo }) => {
  return (
  <div key={movie["_id"]} className="movie-card">
    <div className="poster-frame">
      <img src={movie.Poster} alt="Poster" className="movie-poster"/>
    </div>
    <div className="movie-details-container">
      <div className="movie-title" onClick={() => onClick(movie, changePageTo)}> {movie.Title} </div>
      <div className="movie-minor-details">
        <div>{movie.Genre}</div>
        <div>{movie.Runtime}</div>
        {movie.Rated !== "Unrated" && <div>"{movie.Rated}" Rated</div>}
      </div>
      <div className="movie-language">Language: {movie.Language}</div>
      <div className="shortplot">{movie.Plot}</div>
    </div>
    <div className="Schedules">
      {movie.Schedule && movie.Schedule.map((schedule) => {
        return <Start schedule={schedule}/>
      })}
    </div>
  </div>
  );
}

export default Movie;