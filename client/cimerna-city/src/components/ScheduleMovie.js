function ScheduleMovie({ handleSubmit }) {
    const today = new Date();
    const todayDate = `${today.getFullYear()}-0${(today.getMonth() + 1)}-${today.getDate()}`;
    
    
    return (
        <form className="schedule-new-movie" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="movie-title">Which movie? </label>
                <input id="movie-title" name={"movie-title"} type="text"/>
            </div>
            <div>
                <label htmlFor="movie-date"> Which day you want </label>
                <input id="movie-date" defaultValue={todayDate} name={"movie-date"} type="date"/>
            </div>
            <div>
                <label htmlFor="movie-start"> When do you want to start it </label>
                <input id="movie-start" name={"movie-start"} type="time"/>
            </div>
            <div>
                <label htmlFor="movie-seats"> How many tickets </label>
                <input id="movie-seats" name={"movie-seats"} type="number"/>
            </div>
            <button type="submit"> Preview </button>
        </form>
    );
}
//onSubmit={() => handleSubmit()}
export default ScheduleMovie;