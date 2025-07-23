import TVCard from "../TVCard";
import { useState, useEffect } from "react";
import { searchPopularTVShows } from "../services/api";
import "../css/Home.css";

function Home2() {
  const [searchQuery, setsearchQuery] = useState("");
  const [TV, setTV] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadpopulartv = async () => {
      try {
        const popularTv = await searchPopularTVShows();
        setTV(popularTv);
      } catch (err) {
        console.log(err);
        setError("Failed to load");
      } finally {
        setloading(false);
      }
    };
    loadpopulartv();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setloading(true);
    try {
      // Optionally, implement a TV show search API here
      // For now, just filter the loaded TV shows
      setloading(false);
    } catch (err) {
      setError("Failed to search for TV shows...");
      setloading(false);
    }
  };

  const filteredTV = TV.filter(
    (show) =>
      show.name &&
      show.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <form
        onSubmit={handleSearch}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Search for TV shows!"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
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
          {filteredTV.map((show) => (
            <TVCard movie={show} key={show.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home2;
