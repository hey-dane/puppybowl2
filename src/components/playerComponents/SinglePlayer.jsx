import {singlePlayer, removePlayer} from '../../Helpers/helpers.js';
import {useParams, useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

export default function SinglePlayer() {
  const {playerId} = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await singlePlayer(playerId);
      if (response.success) {
        const playerData = response.data.player;
        setPlayer(playerData);
      } else {
        console.error('Error fetching player:', response.error);
      }
    };
    fetchData();
  }, [playerId]);

  const handleDelete = async () => {
    try {
      const response = await removePlayer(playerId);
      if (response.success) {
        navigate('/AllPlayers');
      } else {
        console.error('Error deleting player:', response.error);
      }
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  if (!player) {
    return <div>Loading....</div>;
  }

  return (
    <div className='featured-player'>
      <img
        src={player.imageUrl}
        alt={player.name}
      />
      <h4>Name: {player.name}</h4>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <button onClick={handleDelete}>Remove Player</button>
    </div>
  );
}
