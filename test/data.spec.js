import { Cartas, Pintar } from '../src/data.js';


describe('Cartas', () => {

  it('is a function', () => {
    expect(typeof Cartas).toBe('function');
  });

  /* it('returns `columna`', () => {
    expect(Cartas()).toBe('columna');
  }); */
});


describe('Pintar', () => {
  it('is a function', () => {
    expect(typeof Pintar).toBe('function');
  });

/*   it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  }); */
});
