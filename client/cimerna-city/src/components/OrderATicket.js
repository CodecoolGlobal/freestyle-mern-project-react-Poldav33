import Start from "./Start";

function OrderATicket({ schedule, onSubmit, onChange }) {
  return <form onChange={onChange} onSubmit={(e) => onSubmit(e, schedule["_id"], schedule.tickets)}>
  <Start schedule={schedule}/>
  <div>Avalable tickets {schedule.tickets}</div>
  <label htmlFor="movie-tickets"> Tickets: </label>
  <input id="movie-tickets" name="movie-tickets" type="number"/>
  <button type="submit">Order</button>
</form>
}

export default OrderATicket;