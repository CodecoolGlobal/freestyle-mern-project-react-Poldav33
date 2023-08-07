import './App.css';
import Movie from './components/Movie';
import { useState, useEffect } from 'react'
import MovieDetails from './components/MovieDetails';

function App() {

  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState();
  const [page, setPage] = useState("")

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/movies');
      const jsonData = await data.json();
      setMovies(jsonData);
      setPage("homePage");
    }
    fetchData();
  }, [])

  const fetchSelectedMovie = async (movie) => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=fc05aea1&t=${movie.Title}&y=${movie.Year}&plot=full`);
    const jsonData = await data.json();
    setSelectedMovie(jsonData);
    setPage("detailMovie");
    console.log(jsonData);
  }








  return (
    <div className="App">
      {page === "homePage" && movies.map(movie =>
      <Movie movie={movie} key={movie['_id']} onClick={fetchSelectedMovie} />
        )}
      {page === "detailMovie" && <MovieDetails movie={selectedMovie}/>}
    </div>
  );
}

export default App;
