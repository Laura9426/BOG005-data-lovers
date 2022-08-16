import data from './data/harrypotter/data.js';

let personajes = [];
let casas = [];
let generos = [];
let ascendencias = [];
let texto = "";

data.characters.forEach((item, i) => {  //guardamos los personajes en un array 
  personajes[i] = item;
})

console.log(personajes[20].name);

export const Cartas = () => {
  const columna = document.getElementById("columnaCartas");
  Pintar(personajes)
  columna.innerHTML = texto;
  filtroCasas()
  filtroGenero()
  filtroAscendencia()
  return columna;
};

export const filtroCasas = () => {
  let columna1 = "";
  const listasSeleccion = document.getElementById("casa");
  listasSeleccion.addEventListener('change', (item) => {
    casas = personajes.filter(dato => dato.house == item.target.value)
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");
    texto = "";
    Pintar(casas)
    columna1.innerHTML = texto;
  });
  return columna1;
};

export const filtroGenero = () => {
  let columna1 = "";
  const listasSeleccion = document.getElementById("genero");
  listasSeleccion.addEventListener('change', (item) => {
    generos = personajes.filter(dato => dato.gender == item.target.value)
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");
    texto = "";
    Pintar(generos)
    columna1.innerHTML = texto;
  });
  return columna1;
};

export const filtroAscendencia = () => {
  let columna1 = "";
  const listasSeleccion = document.getElementById("ascendencia");
  listasSeleccion.addEventListener('change', (item) => {
    ascendencias = personajes.filter(dato => dato.ancestry == item.target.value)
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");
    texto = "";
    Pintar(ascendencias)
    columna1.innerHTML = texto;
  });
  return columna1;
};

const Pintar = (datos) => {
  for (let i = 0; i < datos.length; i++) {
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
      <td>${datos[i].patronus}</td>
    </tr>
  </table>
</article>`
  }
}
