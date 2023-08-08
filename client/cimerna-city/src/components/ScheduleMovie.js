function ScheduleMovie({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Movie Title: <input type="text"/>
            </label>
            <label>
                Date: <input type="date"/>
            </label>
            <label>
                Seats: <input type="number"/>
            </label>
        </form>
    );
}

export default ScheduleMovie;