import data from './data/harrypotter/data.js';

let personajes = [];
let texto = "";

data.characters.forEach((item, i) => {  //guardamos los personajes en un array 
    personajes[i] = item;        
  })
   
export const Cartas = () => {
  const columna = document.getElementById("columnaCartas");
  Pintar(personajes)
  columna.innerHTML=texto;
  filtroCasas()
  filtroGenero()
  filtroAscendencia()
  filtroMuertos()
  filtroVivos()
  Todos()
  Orden()
  DesOrden()
  return columna;
};

const filtroCasas = () => {
  
  let columna1= "";
  let casas = [];
  const listasSeleccion = document.getElementById('casa');

  listasSeleccion.addEventListener('change', (item) => {
  
    casas = personajes.filter(dato => dato.house == item.target.value)
  
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(casas)
    columna1.innerHTML=texto;
  })
  return columna1;
};

const filtroGenero = () => {
  
  let columna1= "";
  let generos = [];
  const listasSeleccion = document.getElementById('genero');

  listasSeleccion.addEventListener('change', (item) => {
  
    generos = personajes.filter(dato => dato.gender == item.target.value)
  
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(generos)
    columna1.innerHTML=texto;
  })
  return columna1;
};

const filtroAscendencia = () => {
  
  let columna1= "";
  let ascendencias = [];
  const listasSeleccion = document.getElementById('ascendencia');

  listasSeleccion.addEventListener('change', (item) => {
  
    ascendencias = personajes.filter(dato => dato.ancestry == item.target.value)
  
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(ascendencias)
    columna1.innerHTML=texto;
  })
  return columna1;
};

const filtroMuertos = () => {
  
  let columna1= "";
  let muertos = [];
  const listasSeleccion = document.getElementById('muerto');

  listasSeleccion.addEventListener('click', () => {

    muertos = personajes.filter(({death}) => death !== null)

    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(muertos)
    columna1.innerHTML=texto;
  })
  return columna1;
};

const filtroVivos = () => {
  
  let columna1= "";
  let vivos = [];
  const listasSeleccion = document.getElementById('vivo');

  listasSeleccion.addEventListener('click', () => {

    vivos = personajes.filter(({death}) => death == null)

    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(vivos)
    columna1.innerHTML=texto;
  })
  return columna1;
};

const Orden = () => {
  
  let nombres = []
  data.characters.forEach((item, i) => {  
    nombres[i] = item;           
  })

  let columna1= "";

  const listasSeleccion = document.getElementById('az');

  listasSeleccion.addEventListener('click', () => {
    
    nombres.sort((a, b) => a.name.localeCompare(b.name));

    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(nombres)
    columna1.innerHTML=texto;
  })
  return columna1;
};

const DesOrden = () => {

  let nombres = []
  data.characters.forEach((item, i) => {  
    nombres[i] = item;           
  })
  
  let columna1= "";
  
  const listasSeleccion = document.getElementById('za');

  listasSeleccion.addEventListener('click', () => {
    
    //nombres.sort((a, b) => b.name.localeCompare(a.name));

    nombres.sort((a, b)=>{

      if(a.name==b.name){
        return 0
      }
      if(a.name>b.name){
        return -1
      }
      return 1

    });
 
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(nombres)
    columna1.innerHTML=texto;
  })
  return columna1;
};

const Todos = () => {

  let columna1= "";

  const listasSeleccion = document.getElementById('todos');

  listasSeleccion.addEventListener('click', () => {

  document.getElementById('casa').selectedIndex = "0";
  document.getElementById('genero').selectedIndex = "0";
  document.getElementById('ascendencia').selectedIndex = "0";
  document.getElementById('muerto').checked = false;
  document.getElementById('vivo').checked = false;
  document.getElementById('az').checked = false;
  document.getElementById('za').checked = false;

  document.getElementById("columnaCartas").innerHTML = "";

  columna1 = document.getElementById("columnaCartas");

  texto = "";
  Pintar(personajes)
  columna1.innerHTML=texto;
  })
  return columna1;
};

const Pintar = (datos) => {

for (let i = 0; i <datos.length; i++){
  texto += `<article class="cartas ${datos[i].house}">
  <div class="logoCarta"></div>
  <h3>${datos[i].name}</h3><br><br>
  <table class="iconos">
    <tr>
      <td><img src="./images/home.png" alt="house"></td>
      <td>${datos[i].house}</td>
    </tr>
    <tr>
      <td><img src="./images/gender.png" alt="gender"></td>
      <td>${datos[i].gender}</td>
    </tr>      <tr>
      <td><img src="./images/cardiogram.png" alt="status"></td>
      <td>${datos[i].death}</td>
    </tr>
    <tr>
      <td><img src="./images/family-tree.png" alt="ancestry"></td>
      <td>${datos[i].ancestry}</td>
    </tr>
    <tr>
      <td><img src="./images/harry-potter.png" alt="patronus"></td>
      <td>${datos[i].wand}</td>
    </tr>
  </table>
</article>`
}};