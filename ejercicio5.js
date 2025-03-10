function rollDice(sides) {
  // Genera un número aleatorio entre 1 y 'sides' (el número de caras del dado)
  const result = Math.floor(Math.random() * sides) + 1;
  return result;
}

// Ejemplos de uso:

console.log(rollDice(6));  // Dado de 6 caras (como un dado tradicional)
console.log(rollDice(20)); // Dado de 20 caras
console.log(rollDice(12)); // Dado de 12 caras
console.log(rollDice(10)); // Dado de 10 caras
