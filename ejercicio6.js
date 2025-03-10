function swap(array, index1, index2) {
  // Usamos una variable temporal para realizar el intercambio
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  
  // Retornamos el array con los elementos intercambiados
  return array;
}

// Ejemplo de uso con el array fantasticFour
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

// Intercambiamos los elementos en las posiciones 0 y 2
const result = swap(fantasticFour, 0, 2);

console.log(result);  // ["La mujer invisible", "Mr. Fantástico", "La antorcha humana", "La cosa"]
