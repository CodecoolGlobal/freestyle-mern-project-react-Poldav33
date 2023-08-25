// import { Link } from 'react-router-dom';

const RoomTable = ({ rooms, onDelete, setPage, setSelectedRoom }) => {
  const handle = (e, room) => {
    e.preventDefault()
    setSelectedRoom(room); 
    setPage("room-update");
  }

  return <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Seats</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {rooms.map((room) => (
          <tr key={room._id}>
            <td>{room.name}</td>
            <td>{room.seats}</td>
            <td>
                <button onClick={(e) => {handle(e, room)}} type="button">Update</button>
              <button type="button" onClick={() => onDelete(room._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

export default RoomTable