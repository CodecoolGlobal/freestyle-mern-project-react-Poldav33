function EditSchedule({ index, schedule, onSave }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const newScheduleData = {
      _id: schedule["_id"],
      fullDate: new Date (`${data.get("movie-date")}, ${data.get("movie-start")}`),
      date: data.get("movie-date"),
      start: data.get("movie-start"),
    }
    schedule.date = newScheduleData.date
    schedule.start = newScheduleData.start
    schedule.fullDate = newScheduleData.fullDate
    onSave(schedule["_id"])
  }

  return <form id={index} onSubmit={handleSubmit}>
    <label htmlFor="movie-date"> Date: </label>
    <input id="movie-date" name={"movie-date"} type="date" defaultValue={schedule.date} />
    <label htmlFor="movie-start"> Start: </label>
    <input id="movie-start" name={"movie-start"} type="time" defaultValue={schedule.start}/>
    <button type="submit">Save</button>
  </form>
}

export default EditSchedule;

// Schedule: {
//   "2023-08-13-11:30": [{
//     start: "11:30",
//     seats: "10",
//     tickets: "5"
//   },
//   {
//     start: "15:30",
//     seats: "10",
//     tickets: "5"
//   }]
//   "2023-08-11": [{
//     start: "18:30",
//     seats: "20",
//     tickets: "5"
//   }]
// }

// placeholder={schedule.date}
// placeholder={schedule.start} 