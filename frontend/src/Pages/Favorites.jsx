import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../MovieCard";
import "../css/Favorites.css";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty-centered">
        <div className="favorites-empty-icon">★</div>
        <div className="favorites-empty-title">No favorites yet</div>
        <div className="favorites-empty-desc">You haven't added any movies to your favorites.<br/>Browse and add some!</div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="movies-grid">
        {favorites.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Favorites;
