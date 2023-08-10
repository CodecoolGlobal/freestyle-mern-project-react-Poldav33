import MovieDetails from "./MovieDetails";
import EditSchedule from "./EditSchedule";

function EditMovie ({ movie }) {
  console.log(movie)
  const movieCopy = Object.assign({}, movie)
  movieCopy.Schedule.sort((a, b) => a.fullDate - b.fullDate)
  console.log(movieCopy)
  return  <>
      <MovieDetails movie={movie}/>
    {movieCopy.Schedule.map(schedule => 
      <EditSchedule schedule={schedule}/>
      )}
      </>

}

export default EditMovie;