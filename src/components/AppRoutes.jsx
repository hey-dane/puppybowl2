import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import NewPlayerForm from "./NewPlayerForm";
import Search from "./Search";

export default function AppRoutes({ searchResults }) {
  return {
    /* <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/AllPlayers"
          element={<AllPlayers searchResults={searchResults} />}
        />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/new" element={<NewPlayerForm />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div> */
  };
}
