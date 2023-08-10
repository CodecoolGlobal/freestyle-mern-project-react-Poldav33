function EditSchedule({ schedule }) {
  // const scheduleDatas = [
  //   { date: schedule.date },
  //   { start: schedule.start }
  // ]

  // const save = () => {

  // }

  return <form key={schedule.title}>
    <label htmlFor="movie-date"> Date: </label>
    <input id="movie-date" name={"movie-date"} type="date" defaultValue={schedule.date} />
    <label htmlFor="movie-start"> Start: </label>
    <input id="movie-start" name={"movie-start"} type="time" defaultValuevalue={schedule.start}/>
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