import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../MovieCard";
import "../css/Favorites.css";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', fontSize: '1.5rem', color: '#888' }}>
        No favorites yet.
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
