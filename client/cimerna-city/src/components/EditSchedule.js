function EditSchedule({ index, schedule, onSave }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const newSchedule = {...schedule};
    newSchedule.date = new Date (`${data.get("movie-date")}, ${data.get("movie-start")}`);
    newSchedule.start = data.get("movie-date");
    newSchedule.fullDate = data.get("movie-start");
    onSave(newSchedule["_id"], newSchedule)
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