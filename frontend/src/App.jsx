import { useState } from "react";
import "./css/App.css";
import MovieCard from "/src/MovieCard";
import Home from "/src/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "/src/Pages/Favorites";
import Navbar from "./Pages/NavBar";
import { MovieProvider } from "./Contexts/MovieContext";
import Forum from "./Pages/Forum";
import BottomNavBar from "./Pages/BottomNavBar";

function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Forum" element={<Forum />} />
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
