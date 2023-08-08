import {useState} from 'react';
import AllPlayers from './AllPlayers';
import NewPlayerForm from '../components/NewPlayerForm';
import Search from '../components/Search';

export default function Home({
  setSearchResults,
  searchResults,
  addPlayer,
  setNewPlayer,
  newPlayer,
  players,
}) {
  return (
    <div id='container'>
      <div id='add-player-container'>
        <NewPlayerForm addPlayer={addPlayer} />
      </div>
      <div id='search-container'>
        <Search setSearchResults={setSearchResults} />
      </div>
      <div id='players-container'>
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
