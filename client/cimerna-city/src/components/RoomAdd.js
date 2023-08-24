import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomAdd = () => {

  console.log("pina");

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [seats, setSeats] = useState(0);

  const handleSubmit = () => {
    fetch('/api/rooms/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        seats: seats,
        schedules: [],
      })
    })
      .then(res => {
        navigate('/rooms')
      })
  }
  console.log("asd")
  return (<>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Room name: </label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="seats">Seats: </label>
      <input
        name="seats"
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
    <button onClick={() => navigate('/rooms')}>Cancel</button>
  </>);
}

export default RoomAdd;