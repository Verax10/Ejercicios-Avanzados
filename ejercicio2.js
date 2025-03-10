const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// Variable para almacenar la suma total del volumen
let totalVolume = 0;
// Variable para contar el número total de sonidos
let soundCount = 0;

// Recorremos cada usuario con for...of
for (const user of users) {
  // Recorremos los sonidos favoritos de cada usuario con for...in
  for (const sound in user.favoritesSounds) {
    // Sumamos el volumen de cada sonido
    totalVolume += user.favoritesSounds[sound].volume;
    // Aumentamos el contador de sonidos
    soundCount++;
  }
}

// Calculamos la media del volumen
const averageVolume = totalVolume / soundCount;

// Imprimimos el resultado
console.log("La media del volumen de todos los sonidos es:", averageVolume);
