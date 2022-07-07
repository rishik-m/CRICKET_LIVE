const API_KEY = "d9900773-e248-4df0-9e15-36778498a891";

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
};

export const getMatchDetail = (id) => {
  const url = `https://api.cricapi.com/v1/match_info?apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
