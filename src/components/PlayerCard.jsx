import React, { useState } from "react";
import Modal from "react-modal";
import FeaturedPlayer from "./FeaturedPlayer";

const modalStyles = {
  content: {
    width: "25%",
    height: "70%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function PlayerCard({ player, removePlayer, setAllPlayers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRemovePlayer = async (playerId) => {
    try {
      await removePlayer(playerId);
      setAllPlayers((prevPlayers) =>
        prevPlayers.filter((p) => p.id !== playerId)
      );
    } catch (error) {
      console.error("Error removing player:", error);
    }
  };

  return (
    <div
      className="card custom-card"
      style={{ width: "16rem", height: "525px", overflow: "auto" }}
    >
      <img src={player.imageUrl} className="card-img-top" alt={player.name} />
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">{player.description}</p>
        <button className="btn btn-primary" onClick={openModal}>
          See Details
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleRemovePlayer(player.id)}
        >
          Remove Player
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <div style={{ fontSize: "16px", padding: "20px", textAlign: "center" }}>
          <h2>{player.name} Details</h2>
          <FeaturedPlayer player={player} style={{ fontSize: "14px" }} />
          <button className="btn btn-primary" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
