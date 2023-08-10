import MovieDetails from "./MovieDetails";
import EditSchedule from "./EditSchedule";

function EditMovie ({ movie }) {
  const movieCopy = Object.assign({}, movie)
  movieCopy.Schedule.sort((a, b) => a.fullDate - b.fullDate)
  const saveNewSchedule = (id) => {
    movieCopy.Schedule.sort((a, b) => a.fullDate - b.fullDate)
    fetch(`/api/movies/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ newData: [...movieCopy.Schedule] })
    })
  }
  return  <>
      <MovieDetails movie={movie}/>
    {movieCopy.Schedule.map((schedule, index) => 
      <EditSchedule key={schedule.title} index={index} schedule={schedule} onSave={saveNewSchedule}/>
      )}
      </>

}

export default EditMovie;