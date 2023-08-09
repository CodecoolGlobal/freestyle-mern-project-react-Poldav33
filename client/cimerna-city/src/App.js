import './App.css';
import { useState, useEffect } from 'react'
import Movie from './components/Movie';
import Button from './components/Button';
import MovieDetails from './components/MovieDetails';
import ScheduleMovie from './components/ScheduleMovie';
import EditMovie from './components/EditMovie';

function App() {

  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState();
  const [page, setPage] = useState("");
  const [newMovie, setNewMovie] = useState({});
  const [scheduleMovie, setScheduleMovie] = useState({});

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/movies');
      const jsonData = await data.json();
      setMovies(jsonData);
      setPage("homePage");
    }
    fetchData();
  }, [])

  const selectMovieToEdit = (movie, changePageTo) => {
    setSelectedMovie(movie)
    setPage(changePageTo)
  }

  const fetchSelectedMovie = async (movie, changePageTo) => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=fc05aea1&t=${movie.Title}&y=${movie.Year}&plot=full`);
    const jsonData = await data.json();
    setSelectedMovie(jsonData);
    setPage(changePageTo);
  }

  const fetchScheduleMovie = async (movie) => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=fc05aea1&t=${movie.title}`);
    const jsonData = await data.json();
    setNewMovie(jsonData);
    setPage("findMovie");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = { newMovieTitle, newMovieDate, newMovieSeats }
    const data = new FormData(event.target);
    const Movie = {
      title: data.get("movie-title"),
      date: data.get("movie-date"),
      start: data.get("movie-start"),
      seats: data.get("movie-seats"),
      tickets: data.get("movie-seats")
    }
    setScheduleMovie(Movie);
    fetchScheduleMovie(Movie);
  }


  const saveSchedule = () => {
    const data = {
      ...newMovie,
      Schedule: {...scheduleMovie}
    };
    console.log(data);
    fetch('/api/movie/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
  }

 




//  {page === "newMovie" && <ScheduleMovie handleSubmit={handleSubmit}/>}


  return (
    <div className="App">
      <div className="allMovies">
        {(page === "homePage" || page === "detailMovie" ) && 
          <>
            <Button buttontext={"Home"} setState={setPage} newState={"homePage"}/>
            <Button buttontext={"Scheduled movies"} setState={setPage} newState={"schedule"}/>
            <Button buttontext={"Schedule new movie"} setState={setPage} newState={"newMovie"}/>
            <Button buttontext={"Edit-schedule"} setState={setPage} newState={"edit-movies"}/>
          </>
        }
        {page === "homePage" && movies.map(movie =>
        <Movie movie={movie} key={movie['_id']} onClick={fetchSelectedMovie} changePageTo={"detailMovie"}/>
          )}
        {page === "detailMovie" && <MovieDetails movie={selectedMovie}/>}
        {(page === "newMovie" || page === "findMovie")&& <ScheduleMovie handleSubmit={handleSubmit} setState={setNewMovie}/>}
        {page === "findMovie" && 
        <>
          <Movie movie={newMovie}/>
          <button onClick={() => {
            setPage("homePage");
            saveSchedule();
          }}
          >Schedule Movie</button>
        </>
        }
        {(page === "edit-movies") && movies.map(movie => 
        <Movie movie={movie} key={movie['_id']} onClick={selectMovieToEdit} changePageTo={"edit-schedule"} />
        )
        }
        {(page === "edit-schedule") && 
        <EditMovie movie={selectedMovie}/>}
      </div>
    </div>
  );
}

export default App;
