import React, { useState } from "react";
import { BASE_URL } from "./helpers";

export default function Search({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    try {
      const matchedPlayers = await fetchAndFilterPlayers();
      setSearchResults(matchedPlayers);
    } catch (error) {
      console.error("Error fetching and filtering players:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAndFilterPlayers = async () => {
    const response = await fetch(`${BASE_URL}/players`);
    const responseData = await response.json();

    if (responseData.success) {
      return responseData.data.players.filter((player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      console.error("API response not successful:", responseData.error);
      return [];
    }
  };

  return (
    <div id="search-bar">
      <h2>Search Players</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
    </div>
  );
}
