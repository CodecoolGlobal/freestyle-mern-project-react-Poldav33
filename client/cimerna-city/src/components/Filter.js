function Filter({ handleFilter }) {
    const today = new Date();
    const todayDate = `${today.getFullYear()}-0${(today.getMonth() + 1)}-${today.getDate()}`;
    return (
        <form className="filter-container"  onSubmit={handleFilter}>
            <label htmlFor="filter-date"> Select date</label>
            <input id="filter-date" defaultValue={todayDate} name={"filter-date"} type="date"/>
            <button type="submit"> Filter movies </button>
        </form>
    );
}

export default Filter;