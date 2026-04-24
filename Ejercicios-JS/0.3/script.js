const input = document.querySelector('#buscar');
const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');
const img = document.querySelector('#imagen');
const lista = document.querySelector('#lista');

boton.addEventListener ('click', ()=>{
    if(input.value!==''){
        Render(input.value)
        input.value = '';
    }
})

const Render = async (pokemon) => {
    nombre.innerHTML = 'Cargando...';
    lista.innerHTML = '';
    img.src = '';
    try {
        const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (datos.ok){
            const json = await datos.json();
            nombre.innerHTML = json.name;
            img.src = json.sprites.front_default;
            habilidades(json);
        }else{
            nombre.innerHTML = 'No existe ese Pokemón';
        }
    } catch (error) {
        nombre.innerHTML = 'Se produjo un error';
    }
    
}

const habilidades = (json) => {
    json.abilities.forEach(element => {
        const li = document.createElement('li');
        li.textContent= element.ability.name;
        lista.appendChild(li);
    });
}