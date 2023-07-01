const api = 'https://pokeapi.co/api/v2/pokemon/'
const wrapper = document.querySelector('.wrapper')

let id = 1
const pokemonMaximo = 649

const pokemonTypes = {
    'normal': {
        'bg':'#b5b5aa',
        'color': '#000'
    },
    'grass': {
        'bg': '#82C961',
        'color': '#000'
    },
    'water': {
        'bg':'#4DA6FA',
        'color': '#fff'
    },
    'fire': {
        'bg':'#F0514B',
        'color': '#fff'
    },
    'fighting': {
        'bg':'#B25E57',
        'color': '#fff'
    },
    'flying': {
        'bg':'#749EF2',
        'color': '#fff'
    },
    'poison': {
        'bg':'#A55E9A',
        'color': '#fff'
    },
    'ground': {
        'bg':'#DBBE5F',
        'color': '#000'
    },
    'rock': {
        'bg':'#BFB076',
        'color': '#000' 
    },
    'bug': {
        'bg':'#B7C44E',
        'color': '#000'
    },
    'ghost': {
        'bg':'#7976C2',
        'color': '#fff'
    },
    'electric': {
        'bg':'#F6D25A',
        'color': '#000' 
    },
    'psychic': {
        'bg':'#EB61A6',
        'color': '#fff'
    },
    'ice': {
        'bg':'#87DFFB',
        'color': '#000' 
    },
    'dragon': {
        'bg':'#8775EC',
        'color': '#fff'
    },
    'dark': {
        'bg':'#8B6756',
        'color': '#fff'
    },
    'steel': {
        'bg':'#B8B7C9',
        'color': '#000' 
    },
    'fairy': {
        'bg':'#E5A4E6',
        'color': '#000' 
    }
}


const pokemonFetch = async (idPokemon) => {
    const response = await fetch(`${api}${idPokemon}`)
    const data = await response.json()
    createHTML(data)
    id = data.id
    console.log(id)
}

pokemonFetch(id)

const createHTML = (data) => {
    const img = document.querySelector('.pokemonImg')
    const pokeGiga = document.querySelector('.pokeGiga')
    const nome = document.querySelector('.name')
    const types = document.querySelector('.types')

    img.setAttribute('src', data.sprites.front_default)
    pokeGiga.style.backgroundImage = `url(${data.sprites.versions['generation-v']['black-white'].animated.front_default})`

    nome.innerText = normalizeName(data.name)

    wrapper.style.boxShadow = `15px 15px 25px ${pokemonTypes[data.types[0].type.name].bg}`
    
    console.log(data.types);
    data.types.map((tp, index) =>{
        const div = document.createElement('div')
        const span = document.createElement('span')

        div.setAttribute('class', 'type')
        span.innerText = normalizeName(tp.type.name)
        div.style.background = pokemonTypes[data.types[index].type.name].bg
        div.style.color = pokemonTypes[data.types[index].type.name].color

        div.appendChild(span)
        types.appendChild(div)
    })
}

const normalizeName = (name) =>{
    return name[0].toUpperCase() + name.slice(1)
}

wrapper.addEventListener('touchstart', function() {
  wrapper.classList.add('hovered');
});

wrapper.addEventListener('touchend', function() {
  wrapper.classList.remove('hovered');
});

//futura feature: status do pokemon no verso do card ao clicar