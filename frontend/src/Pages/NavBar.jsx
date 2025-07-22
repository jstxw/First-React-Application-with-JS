import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">
        Movie
      </Link>
      <div className="navbar-links">
        <Link to="/Favorites" className="nav-link">
          Favorites
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
