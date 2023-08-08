import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";

export default function App({ allPlayers }) {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div id="app-container">
      <Navbar setSearchResults={setSearchResults} />
      <Routes>
        <Route
          path="/"
          element={<Home setSearchResults={setSearchResults} />}
        />
        <Route
          path="/AllPlayers"
          element={<AllPlayers searchResults={searchResults} />}
        />
        <Route path="/players/:playerId" element={<SinglePlayer />} />

        <Route path="/new" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
}
