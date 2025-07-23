import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand navbar-brand-glow">
        NoMovieFOMO
      </Link>
      <div className="navbar-links">
        <Link to="/Home" className="nav-link nav-movies">
          Movies
          {currentPath === "/Home" && <span className="nav-active-bubble" />}
        </Link>
        <Link to="/Home2" className="nav-link nav-tv">
          TV Shows
          {currentPath === "/Home2" && <span className="nav-active-bubble" />}
        </Link>
        <Link to="/Upcoming" className="nav-link nav-upcoming">
          Upcoming
          {currentPath === "/Upcoming" && (
            <span className="nav-active-bubble" />
          )}
        </Link>
        <Link to="/Favorites" className="nav-link nav-favorites">
          Favorites
          {currentPath === "/Favorites" && (
            <span className="nav-active-bubble" />
          )}
        </Link>
        <Link to="/Forum" className="nav-link nav-forum">
          Forum
          {currentPath === "/Forum" && <span className="nav-active-bubble" />}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
