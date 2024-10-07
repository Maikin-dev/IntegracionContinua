const holaMundo = require('./index');

test('Debería retornar "¡Hola, Mundo!"', () => {
    expect(holaMundo()).toBe('¡Hola, Mundo!');
});
