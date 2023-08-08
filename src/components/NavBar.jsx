import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar({ setSearchResults }) {
  return (
    <div id="nav-bar-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/AllPlayers">All Players</Link>
        <Link to="/new">Add Player</Link>
        <Search setSearchResults={setSearchResults} />
      </nav>
    </div>
  );
}
