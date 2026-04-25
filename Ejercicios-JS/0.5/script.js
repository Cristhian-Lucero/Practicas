const objeto = document.querySelector('#objeto');
const monto = document.querySelector('#monto');
const categoria = document.querySelector('#categoria');
const botonAgregar = document.querySelector('#agregar');
const lista = document.querySelector('#lista');
const total = document.querySelector('#total');
const promedio = document.querySelector('#promedio');
const caro = document.querySelector('#caro');
const resumen = document.querySelector('#resumen');

let all = [];

const render = () => {
    lista.innerHTML = '';
    TPC();
    cargarResumen();
    all.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = element.obj + ' - ' + element.mont + ' - ' + element.cat + ' ';
        const button = document.createElement('button');
        button.innerText = 'Delete';
        button.addEventListener('click',()=>{
            element.estado = false;
            limpiarLista();
            render();
        });
        li.appendChild(button);
        lista.appendChild(li);
    });
}

const cargarResumen = () => {
    resumen.innerHTML='';
    const porCategoria = all.reduce((acc,element)=>{
        const tipo = element.cat;
        acc[tipo] = (acc[tipo] || 0) + element.mont;
        return acc;
    },{})
    Object.entries(porCategoria).forEach(([tipo,monto]) => {
        const div = document.createElement('div');
        div.innerHTML = `${tipo}: ` + monto;
        resumen.appendChild(div);
    });
}

const TPC = () => {
    const sumaTotal = all.reduce((suma,element)=>element.mont+suma,0);
    total.innerHTML = sumaTotal;
    promedio.innerHTML = sumaTotal/all.length;
    caro.innerHTML = Math.max(...all.map(element=>element.mont));
}

const limpiarLista = () => {
    let nuevaLista = all.filter(element => element.estado === true);
    all = nuevaLista;
}

botonAgregar.addEventListener('click', () => {
    if (objeto.value!='' && monto.value!='' && categoria.value!=''){
        all.push({obj:objeto.value,mont:Number(monto.value),cat:categoria.value,estado:true});
        render();
    }
})