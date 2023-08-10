import { useState } from "react";
// import Start from "./Start";
import OrderATicket from "./OrderATicket";

function OrderTickets({ originalSchedules }) {
  const [schedules, setSchedules] = useState(originalSchedules)

  // const onTicketChange = (e) => {
  //   e.preventDefault()
  //   const data = new FormData(e.target)
  //   const newSchedule = {...schedules}
  //   newSchedule.tickets = originalSchedules.tickets - data.get("movie-tickets")
  //   setSchedules(newSchedule)
  // }

  const onTicketOrder = (e, id, tickets) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const newSchedule = [...schedules]
    newSchedule.map(schedule => {
      if (schedule["_id"] === id) {
        schedule.tickets = tickets - data.get("movie-tickets")
      }
      return schedule
    })
    setSchedules(newSchedule)
    fetch(`/api/movies/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ newData: [...newSchedule] })
    })
    originalSchedules = newSchedule
  }

  return (<>
    {schedules.map(schedule => 
    <OrderATicket schedule={schedule} onSubmit={onTicketOrder}/>)}
    </>)
}

export default OrderTickets;