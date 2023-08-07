import './App.css';
import Movie from './components/Movie';
import { useState, useEffect } from 'react'

function App() {

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState("")

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/movies');
      const jsonData = await data.json();
      console.log(jsonData);
      setMovies(jsonData);
      setPage("homePage");
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      {page === "homePage" && movies.map(movie =>
      <Movie movie={movie} key={movie['_id']}/>
        )}
    </div>
  );
}

export default App;
