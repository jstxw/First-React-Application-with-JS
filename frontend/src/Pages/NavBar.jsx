import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand navbar-brand-glow">
        MovieFinder
      </Link>
      <div className="navbar-links">
        <Link to="/Favorites" className="nav-link">
          Favorites
        </Link>
        <Link to="/" className="nav-link">
          Movies
        </Link>
        <Link to="/Home2" className="nav-link">
          TV Shows
        </Link>
        <Link to="/Upcoming" className="nav-link">
          Upcoming
        </Link>
        <Link to="/Forum" className="nav-link">
          Forum
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
