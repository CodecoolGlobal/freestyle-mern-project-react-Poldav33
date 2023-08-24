const MovieCard = ({ movies, selectMovieToEdit}) => {
    const handleOnClick = () => {
        selectMovieToEdit
    }

    return (
        <div className='allmovies-container'>
            {movies && movies.map(movie =>
            <MovieCard movie={movie} key={movie['_id']} onClick={selectMovieToEdit}/>
            )}
        </div>

    );

}

export default MovieCard;

