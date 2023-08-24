import { Link } from 'react-router-dom';

const RoomTable = ({ rooms, onDelete }) => (
  <div>
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
              <Link to={`/room/update/${room._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(room._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default RoomTable