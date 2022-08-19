import { filtrarDatos } from '../src/data.js';


describe('filtrarDatos', () => {

  it('is a function', () => {
    expect(typeof filtrarDatos).toBe('function');
  });

  it('Debería retornar "123456789" para "987654321"', () => {
    
    expect(filtrarDatos('987654321')).toBe('123456789');
  });
});


