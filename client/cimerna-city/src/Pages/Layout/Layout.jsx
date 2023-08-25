import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <div className="allMovies">
                <div className='header'></div>
                <div className='navbar'>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/movies/new">
                        Schedule new movie
                    </Link>
                    <Link to="/movies/schedle/edit">
                        Edit schedule
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>

    );
}


export default Layout;
