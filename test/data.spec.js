import { filtrarDatos, sortDataAZ, sortDataZA, Calcular } from '../src/data.js';


describe('filtrarDatos', () => {

  it('is a function', () => {
    expect(typeof filtrarDatos).toBe('function');
  });

  it('Filtrar datos por casa', () => {

    const arrayPrueba = [{ name: 'Harry Potter', house: 'Gryffindor' }, { name: 'Dracco Malfoy', house: 'Slytherin' }]
    const filtroDato = filtrarDatos(arrayPrueba, 'house', 'Gryffindor')

    const resultado = [{ name: 'Harry Potter', house: 'Gryffindor' }]

    expect(filtroDato).toStrictEqual(resultado);

  });

  it('Filtrar datos por genero', () => {

    const arrayPrueba = [{ name: 'Harry Potter', gender: 'male' }, { name: 'Hermione Granger', gender: 'female' }]
    const filtroDato = filtrarDatos(arrayPrueba, 'gender', 'female')

    const resultado = [{ name: 'Hermione Granger', gender: 'female' }]

    expect(filtroDato).toStrictEqual(resultado);

  });

  it('Filtrar datos por descendencia', () => {

    const arrayPrueba = [{ name: 'Harry Potter', ancestry: 'Half-blood' }, { name: 'Dudley Dursley', ancestry: 'Muggle' }]
    const filtroDato = filtrarDatos(arrayPrueba, 'ancestry', 'Muggle')

    const resultado = [{ name: 'Dudley Dursley', ancestry: 'Muggle' }]

    expect(filtroDato).toStrictEqual(resultado);

  });
})
describe('sortDataAZ', () => {

  it('is a function', () => {
    expect(typeof sortDataAZ).toBe('function');
  });

  it('Debería retornar por nombra A-Z', () => {

    const arrayPrueba = [{ name: 'Harry Potter', ancestry: 'Half-blood' }, { name: 'Dudley Dursley', ancestry: 'Muggle' },
    { name: 'Albus Dumbledore', ancestry: 'Half-blood' }]
    const sortPruebaAZ = sortDataAZ(arrayPrueba, 'name')

    const resultado = [{ name: 'Albus Dumbledore', ancestry: 'Half-blood' }, { name: 'Dudley Dursley', ancestry: 'Muggle' },
    { name: 'Harry Potter', ancestry: 'Half-blood' }]

    expect(sortPruebaAZ).toStrictEqual(resultado);
  });

})

describe('sortDataZA', () => {

  it('is a function', () => {
    expect(typeof sortDataZA).toBe('function');
  });

  it('Debería retornar por nombra Z-A', () => {

    const arrayPrueba = [{ name: 'Albus Dumbledore', ancestry: 'Half-blood' }, { name: 'Dudley Dursley', ancestry: 'Muggle' },
    { name: 'Ronald Weasley', ancestry: 'Pure-blood' }]
    const sortPruebaZA = sortDataZA(arrayPrueba, 'name')

    const resultado = [{ name: 'Ronald Weasley', ancestry: 'Pure-blood' }, { name: 'Dudley Dursley', ancestry: 'Muggle' },
    { name: 'Albus Dumbledore', ancestry: 'Half-blood' }]

    expect(sortPruebaZA).toStrictEqual(resultado);
  });

})

describe('Calcular', () => {

  it('is a function', () => {
    expect(typeof Calcular).toBe('function');
  });

  it('Debería retornar porcentaje', () => {

    const arrayPrueba = [{ name: 'Albus Dumbledore', house: 'Gryffindor' }, { name: 'Dudley Dursley', house: 'Slytherin' },
    { name: 'Ronald Weasley', house: 'Gryffindor' }, { name: 'severus Dumbledore', house: 'Gryffindor' }]
    const porcentaje = Calcular('Slytherin', arrayPrueba)

    const resultado = "Estudiantes de " + 'Slytherin' + " " + 25 + " %"

    expect(porcentaje).toStrictEqual(resultado);
  });

})
