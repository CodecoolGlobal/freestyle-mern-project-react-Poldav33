// import DateFilter from '../components/Datefilter';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//     const [filter, setFilter] = useState("");


//     const handleFilter = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.target);
//         const filterDate = data.get("filter-date");
//         setFilter(filterDate);
//     }

//     return (
//         <>
//             <DateFilter handleFilter={handleFilter}/>
//             <div className='allmovies-container'>
//                 {page === "homePage" && movies.map(movie =>
//                 <Movie movie={movie} key={movie['_id']} onClick={selectMovieToEdit} changePageTo={"detailMovie"}/>
//                 )}
//         </div>
//         </>
//     );
// }

// export default HomePage;
