import React from "react";

export default function FeaturedPlayer({ player }) {
  return (
    <div className="featured-player" style={{ fontSize: "14px" }}>
      <img src={player.imageUrl} alt={player.name} style={{ width: "75%" }} />
      <h4>Name: {player.name}</h4>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
    </div>
  );
}
