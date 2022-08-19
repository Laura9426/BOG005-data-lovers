import data from './data/harrypotter/data.js';
import {filtrarDatos} from './data.js';

let texto = "";

const Cartas = () => {
  const columna = document.getElementById("columnaCartas");
  Pintar(data.characters)
  columna.innerHTML = texto;
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
 
  const listasSeleccion = document.getElementById('casa');

  listasSeleccion.addEventListener('change', (item) => {
  
    let casas = filtrarDatos(data.characters, 'house', item.target.value);
  
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(casas)
    columna1.innerHTML=texto;
   
    document.getElementById("porcentaje").style.display = "block"
    let prueba = document.getElementById('porcentaje')
    prueba.innerHTML = Calcular(item.target.value)

  })
  return columna1;
}; 

const filtroGenero = () => {
  
  let columna1= "";

  const listasSeleccion = document.getElementById('genero');

  listasSeleccion.addEventListener('change', (item) => {
  
    let generos = filtrarDatos(data.characters, 'gender', item.target.value);
  
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(generos)
    columna1.innerHTML=texto;
  })
  return columna1;
}; 

const filtroAscendencia = () => {

  let columna1 = "";
  
  const listasSeleccion = document.getElementById('ascendencia');

  listasSeleccion.addEventListener('change', (item) => {

    let ascendencias = filtrarDatos(data.characters, 'ancestry', item.target.value);

    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(ascendencias)
    columna1.innerHTML = texto;
  })
  return columna1;
};

const filtroMuertos = () => {

  let columna1 = "";
  
  const listasSeleccion = document.getElementById('muerto');

  listasSeleccion.addEventListener('click', () => {

    let muertos = data.characters.filter(({ death }) => death !== null)
              
    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(muertos)
    columna1.innerHTML = texto;
  })
  return columna1;
};

const filtroVivos = () => {

  let columna1 = "";
  
  const listasSeleccion = document.getElementById('vivo');

  listasSeleccion.addEventListener('click', () => {

    let vivos = filtrarDatos(data.characters, 'death', null);

    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(vivos)
    columna1.innerHTML = texto;
  })
  return columna1;
};

const Orden = () => {

  let columna1 = "";

  const listasSeleccion = document.getElementById('az');

  listasSeleccion.addEventListener('click', () => {

    let nombres = data.characters.sort((a, b) => a.name.localeCompare(b.name));

    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(nombres)
    columna1.innerHTML = texto;
  })
  return columna1;
};

const DesOrden = () => {

  let columna1 = "";

  const listasSeleccion = document.getElementById('za');

  listasSeleccion.addEventListener('click', () => {

    //nombres.sort((a, b) => b.name.localeCompare(a.name));

    let nombres = data.characters.sort((a, b) => {
      if (a.name == b.name) {
        return 0
      }
      if (a.name > b.name) {
        return -1
      }
      return 1
    });

    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(nombres)
    columna1.innerHTML = texto;
  })
  return columna1;
};

const Todos = () => {

  let columna1 = "";

  const listasSeleccion = document.getElementById('todos');

  listasSeleccion.addEventListener('click', () => {

    document.getElementById('casa').selectedIndex = "0";
    document.getElementById('genero').selectedIndex = "0";
    document.getElementById('ascendencia').selectedIndex = "0";
    document.getElementById('muerto').checked = false;
    document.getElementById('vivo').checked = false;
    document.getElementById('az').checked = false;
    document.getElementById('za').checked = false;
    document.getElementById("porcentaje").style.display = "none"

    document.getElementById("columnaCartas").innerHTML = "";

    columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(data.characters)
    columna1.innerHTML = texto;
  })
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
      <td>${datos[i].wand}</td>
    </tr>
  </table>
</article>`
  }
};

const Calcular = (datoCasas) => {
    
let datosNumerico = [];
let contador= 0;
data.characters.forEach((item, i) => { 
  datosNumerico[i] = item.house;
}) 

datosNumerico.sort();

 for(let i=0; i<datosNumerico.length;i++){

  if(datosNumerico[i+1] == datosNumerico[i]){
    contador++;
  }
  else{
    let porcentaje = contador/datosNumerico.length*100

    if(datosNumerico[i] == datoCasas){
        datosNumerico = ("Estudiantes de " + datosNumerico[i] + " "+ Math.round(porcentaje) + " %")
    }
    contador=0;
  }
} 
return datosNumerico
}


document.getElementById("root").appendChild(Cartas());





















/* 
const listasSeleccion = document.getElementById('genero');
listasSeleccion.addEventListener('change', (item) => {

    let generos = filtrarDatos(data.characters, 'gender', item.target.value);
    
    document.getElementById("columnaCartas").innerHTML = "";

    let columna1 = document.getElementById("columnaCartas");

    texto = "";
    Pintar(generos)
    columna1.innerHTML = texto; 
    return columna1
  }) */