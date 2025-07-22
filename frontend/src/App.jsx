import { useState } from "react";
import "./css/App.css";
import MovieCard from "/src/MovieCard";
import Home from "/src/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "/src/Pages/Favorites";
import Navbar from "./Pages/NavBar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
        <Home />
      </div>
    </>
  );
}

export default App;
