import './App.css';
import Movie from './components/Movie';
import Button from './components/Button';
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
      <div className="allMovies">
        {(page === "homePage" || page === "detailMovie" ) && 
          <>
            <Button buttontext={"Home"} setState={setPage} newState={"homePage"}/>
            <Button buttontext={"Scheduled movies"} setState={setPage} newState={"schedule"}/>
            <Button buttontext={"Schedule new movie"} setState={setPage} newState={"newMovie"}/>
          </>
        }
        {page === "homePage" && movies.map(movie =>
        <Movie movie={movie} key={movie['_id']} onClick={fetchSelectedMovie} />
          )}
        {page === "detailMovie" && <MovieDetails movie={selectedMovie}/>}

      </div>
    </div>
  );
}

export default App;
