import MovieDetails from "./MovieDetails";
import EditSchedule from "./EditSchedule";
import { useState } from "react";

function EditMovie ({ movie, onSceduleChanged }) {
  
  movie.Schedule.sort((a, b) => a.fullDate - b.fullDate)
  // const [newSchedule, setNewSchedule] = useState(movie.Schedule)

  const updateDB = (id, schedule) => {
    fetch("/api/schedule/" + id, {
      method: "PATCH",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(schedule)
    })
    onSceduleChanged(movie._id, schedule)
    // console.log(movie.Schedule)
  }

  const saveNewSchedule = (id, scheduleItem) => {
    // movie.Schedule.sort((a, b) => a.fullDate - b.fullDate)
    // TODO
    const newSchedule = [...movie.Schedule];
    onSceduleChanged(movie._id, schedule)
    updateDB(id, schedule)
  }

  const deleteSchedule = async (id) => {
    const schedule = movie.Schedule.filter(schedule => schedule['_id'] !== id)
    await fetch("/api/schedule" + id, { method: "DELETE" });
    onSceduleChanged(movie._id, schedule)
  }

  return  (<>
      <MovieDetails movie={movie}/>
      {movie.Schedule.map((scheduleItem, index) => 
        <>
          <EditSchedule key={scheduleItem['_id'] + index} index={index} schedule={scheduleItem} onSave={saveNewSchedule} />
          <button key={scheduleItem['_id']} onClick={() => deleteSchedule(scheduleItem['_id'])}>Delete</button>
        </>
      )}
      </>)

}

export default EditMovie;