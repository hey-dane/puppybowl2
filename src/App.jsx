import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import AllPlayers from './pages/AllPlayers';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import SinglePlayer from './components/playerComponents/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState(null);

  const addPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    setNewPlayer(newPlayer);
  };

  return (
    <div id='app-container'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              setSearchResults={setSearchResults}
              searchResults={searchResults}
              addPlayer={addPlayer}
              setNewPlayer={setNewPlayer}
              newPlayer={newPlayer}
              players={players}
            />
          }
        />
        <Route
          path='/AllPlayers'
          element={
            <AllPlayers
              searchResults={searchResults}
              players={players}
              newPlayer={newPlayer}
            />
          }
        />
        <Route
          path='/players/:playerId'
          element={<SinglePlayer />}
        />

        <Route
          path='/new'
          element={<NewPlayerForm />}
        />
      </Routes>
    </div>
  );
}
