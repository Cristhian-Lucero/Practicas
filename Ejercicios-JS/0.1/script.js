let c = 0;
const num = document.querySelector ('#num');
const mas = document.querySelector ('#mas');
const menos = document.querySelector ('#menos');
const reset = document.querySelector ('#reset');

const cont = ()=>{
    num.textContent = c;
    num.style.color = (c===0) ? 'red':'black';
}

mas.addEventListener ('click',()=>{
    c++;
    cont();
});
menos.addEventListener ('click',()=>{
    if (c>0) {
        c--;
    }
    cont();
});
reset.addEventListener ('click',()=>{
    c = 0;
    cont();
});