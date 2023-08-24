import { useState, useEffect } from 'react'
import RoomTable from './RoomTable'

const RoomList = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch('/api/rooms')
    .then(res => res.json())
    .then(res => {
      setRooms(res)
    })
  }, [])

  const handleDelete = (id) => {
    fetch('/api/rooms/' + id, { method: 'DELETE' })
    .then(res => {
       setRooms(rooms.filter(room => room._id !== id))
    })
  }

  return <RoomTable rooms={rooms} onDelete={handleDelete}/>
}

export default RoomList
