const Movie = (movie) => {
  return <div key={movie["_id"]} class="movie-card">
    <img src={movie.Poster} alt="Poster" class="movie-poster"/>
    <div class="movie-details-container">
      <div class="movie-title">{movie.Title}</div>
      <div class="movie-minor-details">
        <div>{movie.Rated}</div>
        <div>{movie.Genre.map(genre => `${genre} `)}</div>
        <div>{movie.Runtime}</div>
      </div>
      <div>{movie.Language}</div>
      <div>{movie.Plot}</div>
    </div>
  </div>
}

module.export