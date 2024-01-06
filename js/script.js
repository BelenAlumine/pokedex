const rootDiv = document.querySelector('#root');
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i).then((response) => response.json())
                  .then(data => showPokemon(data))
}

///////////////////////////////////////////////////////////
//HEADER//
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

///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
//buttons//
const buttonTypes = {
    All: 'all',
    Normal: 'normal',
    Fire: 'fire',
    Water: 'water', 
    Grass: 'grass',
    Electric: 'electric',
    Ice: 'ice',
    Fighting: 'fighting',
    Poison: 'poison',
    Ground: 'ground',
    Flying: 'flying',
    Psychic: 'psychic',
    Bug: 'bug',
    Rock: 'rock',
    Ghost: 'ghost',
    Dark: 'dark',
    Dragon: 'dragon',
    Steel: 'steel',
    Fairy: 'fairy'
}

function createBtns() {
    for (const [typeName, typeClass] of Object.entries(buttonTypes)) {
        const btn = document.createElement('button')
        btn.innerHTML = typeName;        
        btn.classList.add('button', typeClass);
        btn.setAttribute('id', typeClass);
        buttonsContainer.appendChild(btn);
        //btn.addEventListener('click', () => filterByType(typeClass));
    }
}

createBtns()

///////////////////////////////////////////////////////////

const pokemonContainer = document.createElement('div'); //todos
pokemonContainer.classList.add('pokemon-container');
rootDiv.appendChild(pokemonContainer);
const pokemons = document.createElement('div'); //pokemon-todos id: listaPokemon
pokemons.classList.add('pokemon-all');
pokemonContainer.appendChild(pokemons);

    ///////////////////
    let pokemonType = document.createElement('div');
    pokemonType.classList.add('pokemon-type');

    ///////////////////

function showPokemon(poke) {
    let idPoke = poke.id.toString();
    
    if (idPoke.length === 1) {
        idPoke = "#00" + idPoke;
    } else if (idPoke.length === 2) {
        idPoke = "#0" + idPoke;
    } else if (idPoke.length === 3) {
        idPoke = "#" + idPoke;
    }
    
    //POKEMON CARD
    let pokemon = document.createElement('div'); //pokemon
    pokemon.classList.add('pokemon');


    //id
    let idPokemon = document.createElement('p'); //pokemon-id-back
    let nro = document.createTextNode(idPoke);
    idPokemon.appendChild(nro);
    idPokemon.classList.add('id-pokemon');
    pokemon.appendChild(idPokemon);

    //img
    let imgContainer = document.createElement('div');
    let imgPokemon = document.createElement('img');
    imgContainer.classList.add('img-container');
    imgPokemon.classList.add('pokemon-img');

    imgContainer.appendChild(imgPokemon)
    pokemon.appendChild(imgContainer);
    imgPokemon.src = poke.sprites.other["official-artwork"].front_default;
    imgPokemon.alt = '(poke.name) img';

    //info
    let pokemonInfo = document.createElement('div');
    pokemonInfo.classList.add('pokemon-info');

    let idPokemonName = document.createElement('p');  //TITLE POKEMON | ID
    let nroId = document.createTextNode(idPoke);
    idPokemonName.classList.add('id-pokemon-name');
    idPokemonName.appendChild(nroId);

    let nameContainer = document.createElement('div'); //TITLE POKEMON
    nameContainer.classList.add('name-container');

    let namePokemon = document.createElement('h2'); //TITLE POKEMON | NAME
    let txtName = document.createTextNode(poke.name);
    namePokemon.classList.add('name-pokemon');
    namePokemon.appendChild(txtName);

    nameContainer.appendChild(idPokemonName);
    nameContainer.appendChild(namePokemon);

    /////////////////////////////////////////////////////////
    //TYPES//
    let pokemonType = document.createElement('div');
    pokemonType.classList.add('pokemon-type');
    
    for (const type of poke.types) {
        const p = document.createElement('p')
        p.classList.add('type', type.type.name);
        p.innerText = type.type.name;
        console.log(type);
        pokemonType.appendChild(p);
    }
    
    /////////////////////////////////////////////////////////

    //stats
    let pokemonStats = document.createElement('div');
    pokemonStats.classList.add('pokemon-stats');

    let stat1 = document.createElement('p');
    let txtStat1 = document.createTextNode(poke.height + 'M');
    pokemonStats.appendChild(stat1);
    stat1.classList.add('stat');
    stat1.appendChild(txtStat1);


    let stat2 = document.createElement('p');
    let txtStat2 = document.createTextNode(poke.weight + 'KG');
    pokemonStats.appendChild(stat2);
    stat2.classList.add('stat');
    stat2.appendChild(txtStat2);

    pokemonInfo.appendChild(nameContainer);
    pokemonInfo.appendChild(pokemonType);
    pokemonInfo.appendChild(pokemonStats);

    pokemon.appendChild(pokemonInfo);

    //add pokemon to pokemons
    pokemons.appendChild(pokemon);
}

///////////////////////////////////////////////////////////
let buttons = document.querySelectorAll('button');

buttons.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;
    pokemons.innerHTML = '';

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i).then((response) => response.json())
                      .then(data => {
                        if (botonId === 'all') {
                            showPokemon(data);
                        }
                        else {
                            const types = data.types.map(type => type.type.name);
                            console.log(types);
                            //console.log(types.type.name);
                            if (types.some(type => type.includes(botonId))) {
                                console.log('hooola');
                                showPokemon(data);
                                console.log(types);
                            }
                        }
                      })
    }
}))