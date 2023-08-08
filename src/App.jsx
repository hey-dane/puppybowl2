import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import Search from "./components/Search";
import Navbar from "./components/NavBar";
import Home from "./components/Home";

export default function App({ allPlayers }) {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div id="app-container">
      <Navbar setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/AllPlayers"
          element={<AllPlayers searchResults={searchResults} />}
        />
        {/* Other routes */}
      </Routes>
    </div>
  );
}
