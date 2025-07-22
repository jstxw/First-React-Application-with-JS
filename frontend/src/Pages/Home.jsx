import MovieCard from "../MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularmovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadpopularmovies = async () => {
      // function
      try {
        // try to load
        const popularMovies = await getPopularmovies(); //since async, use some bridging constant
        setMovies(popularMovies); // setMovies trigger movies, which we use for our Moviecard
      } catch (err) {
        console.log(err);
        setError("Failed to load");
      } finally {
        setloading(false);
      }
    };
    loadpopularmovies();
  }, []); // run once

  const handleSearch = () => {
    // add search functionality here
  };

  return (
    <div className="home">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Search for movies!"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
