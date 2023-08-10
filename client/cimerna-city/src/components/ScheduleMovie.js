function ScheduleMovie({ handleSubmit }) {
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="movie-title">Which movie? </label>
            <input id="movie-title" name={"movie-title"} type="text"/>
            <label htmlFor="movie-date"> Which day you want </label>
            <input id="movie-date" name={"movie-date"} type="date"/>
            <label htmlFor="movie-start"> When do you want to start it </label>
            <input id="movie-start" name={"movie-start"} type="time"/>
            <label htmlFor="movie-seats"> How many tickets </label>
            <input id="movie-seats" name={"movie-seats"} type="number"/>
            <button type="submit"> Preview </button>
        </form>
    );
}
//onSubmit={() => handleSubmit()}
export default ScheduleMovie;