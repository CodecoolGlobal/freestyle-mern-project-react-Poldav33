import MovieDetails from "./MovieDetails";
import EditSchedule from "./EditSchedule";
import { useState } from "react";

function EditMovie ({ movie }) {
  
  movie.Schedule.sort((a, b) => a.fullDate - b.fullDate)
  const [newSchedule, setNewSchedule] = useState(movie.Schedule)

  const updateDB = (id) => {
    fetch(`/api/movies/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ newData: [...movie.Schedule] })
    })
    setNewSchedule(movie.Schedule)
    console.log(movie.Schedule)
  }

  const saveNewSchedule = (id) => {
    movie.Schedule.sort((a, b) => a.fullDate - b.fullDate)
    updateDB(id)
  }

  const deleteSchedule = (id) => {
    movie.Schedule = movie.Schedule.filter(schedule => schedule['_id'] !== id)
    updateDB(id)
  }

  return  (<>
      <MovieDetails movie={movie}/>
      {newSchedule.map((schedule, index) => 
        <>
          <EditSchedule key={schedule['_id'] + index} index={index} schedule={schedule} onSave={saveNewSchedule} />
          <button key={schedule['_id']} onClick={() => deleteSchedule(schedule['_id'])}>Delete</button>
        </>
      )}
      </>)

}

export default EditMovie;