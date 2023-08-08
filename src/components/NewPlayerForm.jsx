import React, { useState } from "react";
import { addNewPlayer } from "./helpers";

export default function NewPlayerForm({ addPlayer }) {
  const [playerName, setPlayerName] = useState("");
  const [playerBreed, setPlayerBreed] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlayer = {
      name: playerName,
      breed: playerBreed,
    };

    try {
      await addNewPlayer(newPlayer);
      setPlayerName("");
      setPlayerBreed("");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      addPlayer(newPlayer);
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  return (
    <div className="new-player-form-container">
      <h2 className="new-player-form-title">Add New Player</h2>
      {showSuccessMessage && <p>New player added successfully!</p>}
      <form className="new-player-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            value={playerBreed}
            onChange={(e) => setPlayerBreed(e.target.value)}
          />
        </label>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}
