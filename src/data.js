import data from './data/harrypotter/data.js';

let personajes = [];
let texto = "";

data.characters.forEach((item, i) => {  //guardamos los personajes en un array 
    personajes[i] = item;              
  })

  console.log(personajes[20].name);




export const Cartas = () => {
  const columna = document.getElementById("columnaCartas");
  for (let i = 0; i <personajes.length; i++){
    texto += `<article class="cartas ${personajes[i].house}">
    <div class="logoCarta"></div>
    <h3>${personajes[i].name}</h3><br><br>
    <table class="iconos">
      <tr>
        <td><img src="./images/home.png" alt="house"></td>
        <td>${personajes[i].house}</td>
      </tr>
      <tr>
        <td><img src="./images/gender.png" alt="gender"></td>
        <td>${personajes[i].gender}</td>
      </tr>      <tr>
        <td><img src="./images/cardiogram.png" alt="status"></td>
        <td>${personajes[i].death}</td>
      </tr>
      <tr>
        <td><img src="./images/family-tree.png" alt="ancestry"></td>
        <td>${personajes[i].ancestry}</td>
      </tr>
      <tr>
        <td><img src="./images/harry-potter.png" alt="patronus"></td>
        <td>${personajes[i].patronus}</td>
      </tr>
    </table>
  </article>`
  }
  columna.innerHTML=texto;

  return columna;
};

export const anotherExample = () => {
  return 'OMG';
};
