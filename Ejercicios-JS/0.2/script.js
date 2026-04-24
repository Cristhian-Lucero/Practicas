const input = document.querySelector('#tarea')
const agregar = document.querySelector('#agregar')
const borrarTodo = document.querySelector('#borrartodo')
const borrarSeleccionados = document.querySelector('#borrarseleccionado')
const lista = document.querySelector('#lista')

let Tareas = JSON.parse(localStorage.getItem('Tareas')) || [];

const Render = () => {
    lista.innerHTML = '';
    localStorage.setItem('Tareas',JSON.stringify(Tareas));
    Tareas.forEach((element,index) => {
        const li = document.createElement('li');
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.checked = element.estado;
        check.addEventListener('click',()=>{
            Tareas[index].estado = check.checked;
            Render();
        });
        li.classList.toggle('tachado',element.estado);
        li.innerText = element.tarea;
        li.appendChild(check);
        lista.appendChild(li);
    });
}

agregar.addEventListener('click',()=>{
    if (input.value!==''){
        Tareas.push({tarea:input.value,estado:false})
        input.value = '';
        Render();
    };
})
borrarTodo.addEventListener('click',()=>{
    Tareas = [];
    Render();
})
borrarSeleccionados.addEventListener('click',()=>{
    let noMarcados = Tareas.filter(element => element.estado===false);
    Tareas = noMarcados;
    Render();
})
Render();