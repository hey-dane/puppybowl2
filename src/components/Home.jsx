import React, { useState } from "react";
import AllPlayers from "./AllPlayers";
import NewPlayerForm from "./NewPlayerForm";
import Search from "./Search";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState(null);

  const addPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    setNewPlayer(newPlayer);
  };

  return (
    <div id="container">
      <div id="add-player-container">
        <NewPlayerForm addPlayer={addPlayer} />
      </div>
      <div id="search-container">
        <Search setSearchResults={setSearchResults} />
      </div>
      <div id="players-container">
        <AllPlayers
          searchResults={searchResults}
          players={players}
          newPlayer={newPlayer}
          onNewPlayerAdded={() => setNewPlayer(null)}
        />
      </div>
    </div>
  );
}
