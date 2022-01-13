const axios = require("axios");

function catchPokemon(randomId) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`)
    .then((res) => {
      const randomPokemon = res.data.name;
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
      console.log(pokemons);
    });
}

pushPokemon();
