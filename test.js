const axios = require("axios");

function catchPokemon(randomId) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`)
    .then((res) => {
      console.log("id : " + randomId, "\nname : " + res.data.name);
    })
    .catch((err) => {
      console.log("ERROR!", err);
    });
}

const randomPokemons = Math.floor(Math.random() * (100 - 1 + 1) + 1);

catchPokemon(randomPokemons);

console.log("Chargement en cours...");

module.exports = { catchPokemon };
