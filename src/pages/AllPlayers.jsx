import {useEffect, useState} from 'react';
import PlayerCard from '../components/playerComponents/PlayerCard';
import {allPlayers as fetchAllPlayers, removePlayer} from '../Helpers/helpers';

export default function AllPlayers({searchResults, newPlayer}) {
  const [allPlayers, setAllPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPlayers();
        setAllPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    fetchData();
  }, [newPlayer]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setFilteredPlayers(searchResults);
    } else {
      setFilteredPlayers(allPlayers);
    }
  }, [searchResults, allPlayers]);

  const handleRemovePlayer = async (playerId) => {
    const result = await removePlayer(playerId);
    if (result.success) {
      setAllPlayers((prevPlayers) =>
        prevPlayers.filter((player) => player.id !== playerId)
      );
      setFilteredPlayers((prevPlayers) =>
        prevPlayers.filter((player) => player.id !== playerId)
      );
    }
  };

  return (
    <div className='card-group'>
      {filteredPlayers.map((player) => (
        <div
          className='col-md-4 col-lg-3 mb-4'
          key={player.id}
        >
          <PlayerCard
            player={player}
            removePlayer={handleRemovePlayer}
            setAllPlayers={setAllPlayers}
          />
        </div>
      ))}
    </div>
  );
}
