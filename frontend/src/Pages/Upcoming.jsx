import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../services/api";
import UpcomingCard from "../UpcomingCard";
import "../css/Home.css";

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const data = await getUpcomingMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to load upcoming movies");
      } finally {
        setLoading(false);
      }
    };
    fetchUpcoming();
  }, []);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title &&
      movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <form
        onSubmit={e => e.preventDefault()}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Search for upcoming movies!"
          className="search-input"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <UpcomingCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Upcoming; 