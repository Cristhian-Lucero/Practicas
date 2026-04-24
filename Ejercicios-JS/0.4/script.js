const nombre = document.querySelector('#nombre');
const edad = document.querySelector('#edad');
const email = document.querySelector('#emaill');
const contraseña = document.querySelector('#contraseña');
const confirmar = document.querySelector('#Ccontraseña');

const nombreSpan = document.querySelector('#span1');
const edadSpan = document.querySelector('#span2');
const emailSpan = document.querySelector('#span3');
const contraseñaSpan = document.querySelector('#span4');
const confirmarSpan = document.querySelector('#span5');

const nombreDiv = document.querySelector('#div1');
const edadDiv = document.querySelector('#div2');
const emailDiv = document.querySelector('#div3');
const contraseñaDiv = document.querySelector('#div4');
const confirmarDiv = document.querySelector('#div5');

const ValidarNombre = () => {
    if (nombre.value!==''){
        nombreSpan.textContent = (nombre.value.length<3) ? 'Al menos 3 caracteres':'';
        nombreDiv.innerHTML = (nombre.value.length>=3) ? 'Nombre: ' + nombre.value:'';
    }else{
        nombreSpan.textContent = '';
    }
}
nombre.addEventListener('input', ()=> {
    ValidarNombre();
})

const ValidarEdad = () => {
    if (edad.value!==''){
        edadSpan.textContent = (edad.value<18 || edad.value>100) ? 'Edad entre 18 y 100 requerido':'';
        edadDiv.innerHTML = !(edad.value<18 || edad.value>100) ? 'Edad: ' + edad.value:'';
    }else{
        edadSpan.textContent = '';
    }
}
edad.addEventListener('input', ()=> {
    ValidarEdad();
})

const ValidarEmail = () => {
    if (email.value!==''){
        emailSpan.textContent = (email.checkValidity()) ? 'Formato no valido':'';
        emailDiv.innerHTML = (email.checkValidity()) ? 'Email: ' + email.value:'';
    }else{
        emailSpan.textContent = '';
    }
}
email.addEventListener('input', ()=> {
    ValidarEmail();
})

const ValidarContraseña = () => {
    if (contraseña.value!==''){
        contraseñaSpan.textContent = !(contraseña.value.length>7 && /[A-Z]/.test(contraseña.value) && /[0-9]/.test(contraseña.value)) ? 'Al menos 8 caracteres, un numero y una mayuscula':'';
        contraseñaDiv.innerHTML = (contraseña.value.length>7 && /[A-Z]/.test(contraseña.value) && /[0-9]/.test(contraseña.value)) ? 'Contraseña: ' + contraseña.value:'';
    }else{
        contraseñaSpan.textContent = '';
    }
}
contraseña.addEventListener('input', ()=> {
    ValidarContraseña();
})

const ValidarConfirmar = () => {
    if (confirmar.value!==''){
        confirmarSpan.textContent = !(confirmar.value===contraseña.value) ? 'No es igual a la contraseña':'';
        confirmarDiv.innerHTML = (confirmar.value===contraseña.value) ? 'Contraseña Confirmar: ' + confirmar.value:'';
    }else{
        contraseñaSpan.textContent = '';
    }
}
confirmar.addEventListener('input', ()=> {
    ValidarConfirmar();
})