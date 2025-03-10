function findArrayIndex(array, text) {
  return array.indexOf(text); // Devuelve el índice del texto si lo encuentra, o -1 si no.
}

// Ejemplos de uso:

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

// Ejemplo 1: Buscar un personaje que está en el array
console.log(findArrayIndex(mainCharacters, "Leia")); // 1

// Ejemplo 2: Buscar un personaje que está en el array
console.log(findArrayIndex(mainCharacters, "Han Solo")); // 2

// Ejemplo 3: Buscar un personaje que no está en el array
console.log(findArrayIndex(mainCharacters, "Yoda")); // -1

// Ejemplo 4: Buscar un personaje que está en el array
console.log(findArrayIndex(mainCharacters, "Obi-Wan")); // 6


// 4.2 


// Función para encontrar el índice del array
function findArrayIndex(array, text) {
  return array.indexOf(text); // Devuelve el índice del texto si lo encuentra, o -1 si no.
}

// Función para eliminar el elemento del array utilizando el índice
function removeItem(array, text) {
  // Obtenemos el índice usando la función findArrayIndex
  const index = findArrayIndex(array, text);
  
  // Si el índice es diferente de -1 (es decir, si el texto está en el array)
  if (index !== -1) {
      // Usamos splice para eliminar el elemento en el índice encontrado
      array.splice(index, 1); // El segundo parámetro es la cantidad de elementos a eliminar (1 en este caso)
  }
  
  // Retornamos el array modificado
  return array;
}


// Ejemplo 1: Eliminar un personaje que está en el array
console.log(removeItem(mainCharacters, "Leia")); 
// Resultado esperado: ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

// Ejemplo 2: Eliminar un personaje que está en el array
console.log(removeItem(mainCharacters, "Han Solo"));
// Resultado esperado: ["Luke", "Leia", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

// Ejemplo 3: Intentar eliminar un personaje que no está en el array
console.log(removeItem(mainCharacters, "Yoda")); 
// Resultado esperado: ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

// Ejemplo 4: Eliminar un personaje que está en el array
console.log(removeItem(mainCharacters, "Obi-Wan"));
// Resultado esperado: ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin"]
