// tests/timerEntity.test.js

import Timer from '../src/timerEntity';

describe('Timer class', () => {
  let timer;

  beforeEach(() => {
    // Crea un nuevo timer antes de cada prueba
    timer = new Timer(600); // 10 minutos en segundos
  });

  test('should return the correct minutes', () => {
    expect(timer.getMinutes()).toBe('10'); // 600 segundos = 10 minutos
  });

  test('should return the correct seconds', () => {
    expect(timer.getSeconds()).toBe('00'); // 600 segundos = 10 minutos, 0 segundos
  });

  test('should decrease the time when started', (done) => {
    // Esto se usa para pruebas asincrónicas
    timer.start((remainingTime) => {
      expect(remainingTime).toBe(599); // Después de 1 segundo, debe quedar 599 segundos
      done(); // Al llamar a done, Jest sabe que la prueba terminó
    });
  });

  test('should stop the timer when stop is called', () => {
    timer.start(() => {});
    timer.stop();
    expect(timer.remainingTime).toBe(600); // Debería detenerse en 600
  });
});
