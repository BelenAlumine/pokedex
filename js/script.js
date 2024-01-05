const rootDiv = document.querySelector('#root');

//HEADER//
///////////////////////////////////////////////////////////
const header = document.createElement('header');
rootDiv.appendChild(header);
//IMG LOGO//
const imgLogo = document.createElement('img');
const imgL = './img/pokeball.png';
header.appendChild(imgLogo);
imgLogo.src = imgL;
imgLogo.alt = 'Pokeball logo'
//BUTTON CONTAINER//
const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
header.appendChild(buttonsContainer);
//HR//
const hr = document.createElement('hr');
rootDiv.appendChild(hr);


//buttons//
const allBtn = document.createElement('button');
const normalBtn = document.createElement('button');
const fireBtn = document.createElement('button');
const waterBtn = document.createElement('button');
const grassBtn = document.createElement('button');
const electricBtn = document.createElement('button');
const iceBtn = document.createElement('button');
const fightingBtn = document.createElement('button');
const poisonBtn = document.createElement('button');
const groundBtn = document.createElement('button');
const flyingBtn = document.createElement('button');
const psychicBtn = document.createElement('button');
const bugBtn = document.createElement('button');
const rockBtn = document.createElement('button');
const ghostBtn = document.createElement('button');
const darkBtn = document.createElement('button');
const dragonBtn = document.createElement('button');
const steelBtn = document.createElement('button');
const fairyBtn = document.createElement('button');

createBtn(allBtn, 'All', 'all');
createBtn(normalBtn, 'Normal', 'normal');
createBtn(fireBtn, 'Fire', 'fire');
createBtn(waterBtn, 'Water', 'water');
createBtn(electricBtn, 'Electric', 'electric');
createBtn(iceBtn, 'Ice', 'ice');
createBtn(fightingBtn, 'Fighting', 'fighting');
createBtn(poisonBtn, 'Poison', 'poison');
createBtn(groundBtn, 'Ground', 'ground');
createBtn(flyingBtn, 'Flying', 'flying');
createBtn(psychicBtn, 'Psychic', 'psychic');
createBtn(bugBtn, 'Bug', 'bug');
createBtn(rockBtn, 'Rock', 'rock');
createBtn(ghostBtn, 'Ghost', 'ghost');
createBtn(darkBtn, 'Dark', 'dark');
createBtn(dragonBtn, 'Dragon', 'dragon');
createBtn(steelBtn, 'Steel', 'steel');
createBtn(fairyBtn, 'Fairy', 'fairy');

///////////////////////////////////////////////////////////

const pokemonContainer = document.createElement('div'); //todos
pokemonContainer.classList.add('pokemon-container');
rootDiv.appendChild(pokemonContainer);

const pokemons = document.createElement('div'); //pokemon-todos id: listaPokemon
pokemons.classList.add('pokemon-all');
pokemonContainer.appendChild(pokemons);

//POKEMON CARD
let pokemon = document.createElement('div'); //pokemon
pokemon.classList.add('pokemon');

//id
let idPokemon = document.createElement('p'); //pokemon-id-back
let nro = document.createTextNode('#248');
idPokemon.appendChild(nro);
idPokemon.classList.add('id-pokemon');
pokemon.appendChild(idPokemon);

//img
let imgContainer = document.createElement('div');
let imgPokemon = document.createElement('img');
//let imgP = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png';
imgContainer.classList.add('img-container');
imgPokemon.classList.add('pokemon-img');

imgContainer.appendChild(imgPokemon)
pokemon.appendChild(imgContainer);
imgPokemon.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png';;
imgPokemon.alt = 'mew img';



//info
let pokemonInfo = document.createElement('div');
pokemonInfo.classList.add('pokemon-info');

let idPokemonName = document.createElement('p');  //TITLE POKEMON | ID
let nroId = document.createTextNode('#248');
idPokemonName.classList.add('id-pokemon-name');
idPokemonName.appendChild(nroId);

let nameContainer = document.createElement('div'); //TITLE POKEMON
nameContainer.classList.add('name-container');

let namePokemon = document.createElement('h2'); //TITLE POKEMON | NAME
let txtName = document.createTextNode('Mew');
namePokemon.classList.add('name-pokemon');
namePokemon.appendChild(txtName);

nameContainer.appendChild(idPokemonName);
nameContainer.appendChild(namePokemon);

//type
let pokemonType = document.createElement('div');
pokemonType.classList.add('pokemon-type');


let type1 = document.createElement('p');
let txtType1 = document.createTextNode('psychic');
pokemonType.appendChild(type1);
type1.classList.add('type', 'psychic');
type1.appendChild(txtType1);

let type2 = document.createElement('p');
let txtType2 = document.createTextNode('psychic');
pokemonType.appendChild(type2);
type2.classList.add('type', 'psychic');
type2.appendChild(txtType2);


//stats
let pokemonStats = document.createElement('div');
pokemonStats.classList.add('pokemon-stats');

let stat1 = document.createElement('p');
let txtStat1 = document.createTextNode('4m');
pokemonStats.appendChild(stat1);
stat1.classList.add('stat');
stat1.appendChild(txtStat1);


let stat2 = document.createElement('p');
let txtStat2 = document.createTextNode('60kg');
pokemonStats.appendChild(stat2);
stat2.classList.add('stat');
stat2.appendChild(txtStat2);


pokemonInfo.appendChild(nameContainer);
pokemonInfo.appendChild(pokemonType);
pokemonInfo.appendChild(pokemonStats);

//
pokemon.appendChild(pokemonInfo);

//add pokemon to pokemons
pokemons.appendChild(pokemon);

///////////////////////////////////////////////////////////
//POKEMON DUPLICADO
//POKEMON CARD
let pokemon2 = document.createElement('div'); //pokemon
pokemon2.classList.add('pokemon');

//id
let idPokemon2 = document.createElement('p'); //pokemon-id-back
let nro2 = document.createTextNode('#248');
idPokemon2.appendChild(nro2);
idPokemon2.classList.add('id-pokemon');
pokemon2.appendChild(idPokemon2);

//img
let imgPokemon2 = document.createElement('img');
let imgP2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png';
imgPokemon2.classList.add('pokemon-img');

pokemon2.appendChild(imgPokemon2);
imgPokemon2.src = imgP2;
imgPokemon2.alt = 'mew img';

//info
let pokemonInfo2 = document.createElement('div');
pokemonInfo2.classList.add('pokemon-info');

let nameContainer2 = document.createElement('div'); //TITLE POKEMON
nameContainer2.classList.add('name-container');

let idPokemonName2 = document.createElement('p');  //TITLE POKEMON | ID
let nroId2 = document.createTextNode('#248');
idPokemonName2.classList.add('id-pokemon-name');
idPokemonName2.appendChild(nroId2);
nameContainer2.appendChild(idPokemonName2);

let namePokemon2 = document.createElement('h2'); //TITLE POKEMON | NAME
let txtName2 = document.createTextNode('Mew');
namePokemon2.classList.add('name-pokemon');
namePokemon2.appendChild(txtName2);
nameContainer2.appendChild(namePokemon2);

//type
let pokemonType2 = document.createElement('div');
pokemonType2.classList.add('pokemon-type');

//stats
let pokemonStats2 = document.createElement('div');
pokemonStats2.classList.add('pokemon-stats');


pokemon2.appendChild(nameContainer2);
pokemon2.appendChild(pokemonInfo2);
pokemon2.appendChild(pokemonType2);
pokemon2.appendChild(pokemonStats2);

//duplicado
pokemons.appendChild(pokemon2);
///////////////////////////////////////////////////////////
//FUNCTIONS//
function createBtn(nameBtn, txtBtn, classBtn) {
    nameBtn.innerHTML = txtBtn;
    nameBtn.classList.add('button', classBtn);
    buttonsContainer.appendChild(nameBtn);
}