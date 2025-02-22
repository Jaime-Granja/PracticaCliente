// tests/changeValueTimer.test.js

import { increaseTimer, decreaseTimer } from '../src/useCases/changeValueTimer';
import Timer from '../src/timerEntity';

describe('changeValueTimer', () => {
  let timer;

  beforeEach(() => {
    // Crea un nuevo timer antes de cada prueba
    timer = new Timer(600); // 10 minutos en segundos
  });

  test('should increase the timer by one minute', () => {
    const initialTime = timer.remainingTime; // 600 segundos (10 minutos)
    increaseTimer(timer);
    expect(timer.remainingTime).toBe(initialTime + 60); // El tiempo debe aumentar en 1 minuto
  });

  test('should decrease the timer by one minute', () => {
    const initialTime = timer.remainingTime; // 600 segundos (10 minutos)
    decreaseTimer(timer);
    expect(timer.remainingTime).toBe(initialTime - 60); // El tiempo debe disminuir en 1 minuto
  });
});
