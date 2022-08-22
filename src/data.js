export const filtrarDatos = (datos1, campoFiltrado, valor) => {
  
  let generos = datos1.filter(dato => dato[campoFiltrado] == valor)
 
  return generos;
};

export const sortDataAZ = (datos2, campoFiltrado1) => {

  let nombres = datos2.sort((a, b) => a[campoFiltrado1].localeCompare(b[campoFiltrado1]));

  return nombres;

}

export const sortDataZA = (datos3, campoFiltrado2) => {

  let nombres = datos3.sort((a, b) => b[campoFiltrado2].localeCompare(a[campoFiltrado2]));

  return nombres;

}

export const Calcular = (datoCasas,datos4) => {
    
  let datosNumerico = [];
  let contador= 0;
  datos4.forEach((item, i) => { 
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
