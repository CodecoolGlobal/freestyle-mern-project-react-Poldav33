function Filter({ handleFilter }) {
    return (
        <form className="filter-container"  onSubmit={handleFilter}>
            <label htmlFor="filter-date"> Select date</label>
            <input id="filter-date" name={"filter-date"} type="date"/>
            <button type="submit"> Filter movies </button>
        </form>
    );
}

export default Filter;