import DateFilter from '../components/Datefilter';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

const HomePage = () => {
    const [filter, setFilter] = useState("");


    const handleFilter = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const filterDate = data.get("filter-date");
        setFilter(filterDate);
    }

    const selectMovie = () => {

    }

    return (
        <>
            <DateFilter handleFilter={handleFilter}/>
            <MovieList movies={movies}/>
        </>
    );
}

export default HomePage;
