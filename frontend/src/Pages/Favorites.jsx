import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../MovieCard";
import TVCard from "../TVCard";
import UpcomingCard from "../UpcomingCard";
import "../css/Favorites.css";

const getMediaType = (item) => {
  if (item.first_air_date && item.name) return "tv";
  if (item.release_date && item.title) {
    if (item.isUpcoming) return "upcoming";
    return "movie";
  }
  return "movie";
};

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
        {favorites.map((item) => {
          const type = getMediaType(item);
          if (type === "tv") return <TVCard movie={item} key={item.id} />;
          if (type === "upcoming") return <UpcomingCard movie={item} key={item.id} />;
          return <MovieCard movie={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
