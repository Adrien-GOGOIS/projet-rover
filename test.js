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

let pokemonGrid = [[], [], [], [], [], [], [], [], [], []];

function pushPokemon() {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=100`)
    .then((res) => {
      let pokemons = res.data.results.map((pokemon) => {
        return pokemon.name;
      });

      for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
          pokemonGrid[i].push(pokemons[k]);
        }
      }

      console.log(pokemonGrid);
    });
}

pushPokemon();

// const randomPokemons =

// catchPokemon(Math.floor(Math.random() * (100 - 1 + 1) + 1));

// console.log("Chargement en cours...");

module.exports = { catchPokemon, pushPokemon };
