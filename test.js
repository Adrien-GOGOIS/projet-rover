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

let pokemons = [
    ['bulbasaur',  'ivysaur',    'venusaur',   'charmander', 'charmeleon',
    'charizard',  'squirtle',   'wartortle',  'blastoise',  'caterpie',]
    ['metapod',    'butterfree', 'weedle',     'kakuna',     'beedrill',
    'pidgey',     'pidgeotto',  'pidgeot',    'rattata',    'raticate',]
    ['spearow',    'fearow',     'ekans',      'arbok',      'pikachu',
    'raichu',     'sandshrew',  'sandslash',  'nidoran-f',  'nidorina']
    ['nidoqueen',  'nidoran-m',  'nidorino',   'nidoking',   'clefairy',
    'clefable',   'vulpix',     'ninetales',  'jigglypuff', 'wigglytuff']
    ['zubat',      'golbat',     'oddish',     'gloom',      'vileplume',
    'paras',      'parasect',   'venonat',    'venomoth',   'diglett']
    ['dugtrio',    'meowth',     'persian',    'psyduck',    'golduck',
    'mankey',     'primeape',   'growlithe',  'arcanine',   'poliwag']
    ['poliwhirl',  'poliwrath',  'abra',       'kadabra',    'alakazam',
    'machop',     'machoke',    'machamp',    'bellsprout', 'weepinbell']
    ['victreebel', 'tentacool',  'tentacruel', 'geodude',    'graveler',
    'golem',      'ponyta',     'rapidash',   'slowpoke',   'slowbro']
    ['magnemite',  'magneton',   'farfetchd',  'doduo',      'dodrio',
    'seel',       'dewgong',    'grimer',     'muk',        'shellder']
    ['cloyster',   'gastly',     'haunter',    'gengar',     'onix',
    'drowzee',    'hypno',      'krabby',     'kingler',    'voltorb']
  ]
