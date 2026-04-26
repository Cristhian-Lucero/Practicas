// https://pokeapi.co/api/v2/pokemon/${pokemon}
const input = document.querySelector('#buscar');
const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');
const img = document.querySelector('#imagen');
const lista = document.querySelector('#lista');

const cargarDatos = (pokemon) => {
    lista.innerHTML = '';
    nombre.innerHTML = pokemon.name;
    img.src = pokemon.sprites.front_default;
    pokemon.abilities.forEach(element => {
        const li = document.createElement('li');
        console.log(element);
        li.innerHTML = element.ability.name;
        lista.appendChild(li);
    });
}

const buscar = async () =>{
    lista.innerHTML = 'Cargando...';
    nombre.innerHTML = '';
    img.src = '';
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);
        if (data.ok){
            const json = await data.json();
            nombre.innerHTML = json.name;
            cargarDatos(json);
        }else{
            lista.innerHTML = 'No existe el pokemon';
        }
    } catch (error) {
        lista.innerHTML = error;
    }
}

boton.addEventListener('click',()=>{
    if (input!=''){
        buscar();
    }
})