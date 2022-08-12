import data from './data/harrypotter/data.js';

let personajes = [];

data.characters.forEach((item, i) => {  //guardamos los personajes en un array 
    personajes[i] = item;              
  })

  //console.log(personajes[0].name);




export const Cartas = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
