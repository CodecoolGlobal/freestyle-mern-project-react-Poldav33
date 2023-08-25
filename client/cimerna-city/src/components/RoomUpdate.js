import { useState, useEffect } from "react";

const RoomUpdate = ({ setPage, selectedRoom }) => {
  const id = selectedRoom._id

  const [room, setRoom] = useState({});
  const [name, setName] = useState('');
  const [seats, setSeats] = useState(0);

  useEffect(() => {
    fetch('/api/rooms/' + id)
      .then(res => res.json())
      .then(res => {
        setRoom(res)
        setName(res.name)
        setSeats(res.seats)
      })
  }, [id])

  const handleUpdate = (e) => {
    e.preventDefault()
    const newRoomData = {...room}
    newRoomData.name = name
    newRoomData.seats = seats
    console.log(newRoomData)
    fetch('/api/rooms/' + id, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ ...newRoomData })
    })
    .then(res => {
      setPage("rooms")
    })
  }

  const handleDelete = () => {
    fetch('/api/rooms/' + id, { method: 'DELETE' })
    .then(res => {
      setPage("rooms") 
    })
  }

  return <>
    <form >
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
      <button onClick={handleUpdate}>Update</button>
    </form>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={setPage("rooms")}>Cancel</button>
  </>
}

export default RoomUpdate;