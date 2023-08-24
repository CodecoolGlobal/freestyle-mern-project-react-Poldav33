import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RoomUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState({});
  const [name, setName] = useState('');
  const [seats, setSeats] = useState(0);

  useEffect(() => {
    fetch('/api/rooms/' + id)
      .then(res => res.json())
      .then(res => {
        setRoom(res)
      })
  })

  const handleUpdate = (name, seats) => {
    const newRoomData = {...room}
    newRoomData.name = name
    newRoomData.seats = seats
    fetch('/api/rooms/' + id, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ ...newRoomData })
    })
  }

  const handleDelete = () => {
    fetch('/api/rooms/' + id, { method: 'DELETE' })
    .then(res => {
      navigate("/rooms") 
    })
  }

  return <>
    <form onSubmit={handleUpdate}>
      <label htmlFor="name">RoomName: </label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="seats">Seats: </label>
      <input
        name="seats"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
    <button onClick={handleDelete}>Delete</button>
    <button>Cancel</button>
  </>
}

export default RoomUpdate;