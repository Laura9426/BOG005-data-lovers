export const filtrarDatos = (datos1, campoFiltrado, valor) => {
  
  let generos = datos1.filter(dato => dato[campoFiltrado] == valor)
 
  return generos;
};



