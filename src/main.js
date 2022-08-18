import { Cartas} from './data.js';
document.getElementById("root").appendChild(Cartas());

const boton = document.getElementById('boton1');
console.log(boton)
boton.addEventListener('click', function (){
    alert("Página en construcción")
    alert("coso")
});