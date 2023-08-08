const cohortName = "2302-ACC-PT-WEB-PT-C";
export const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const allPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const result = await response.json();
    const allPlayers = result.data.players;
    return allPlayers;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const singlePlayer = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`);
    const singlePlayer = await response.json();
    console.log(singlePlayer);
    return singlePlayer;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${BASE_URL}/players/`, {
      method: "POST",
      body: JSON.stringify(playerObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};
export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log("Response:", response);
    console.log("Result:", result);
    return result;
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};
