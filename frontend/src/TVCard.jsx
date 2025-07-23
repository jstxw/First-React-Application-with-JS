import "./css/MovieCard.css";
import { useMovieContext } from "./Contexts/MovieContext";

function TVCard({ movie }) {
  const { isFavorites, addToFavorites, removeFromFavorites } =
    useMovieContext();
  const favorite = isFavorites(movie.id);
  function onClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.name}
        />
        <div className="movie-overlay">
          <span className="upcoming-label">TV</span>
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.name}</h3>
        <p>{movie.first_air_date}</p>
      </div>
    </div>
  );
}

export default TVCard;
