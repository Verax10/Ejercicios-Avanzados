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

// Objeto para contar las veces que cada sonido ha sido agregado como favorito
let soundCount = {};

// Recorremos cada usuario con `for...of`
for (const user of users) {
  // Recorremos los sonidos favoritos de cada usuario con `for...in`
  for (const sound in user.favoritesSounds) {
    // Si el sonido ya está en el objeto de conteo, incrementamos el contador
    if (soundCount[sound]) {
      soundCount[sound]++;
    } else {
      // Si es la primera vez que encontramos ese sonido, lo inicializamos con 1
      soundCount[sound] = 1;
    }
  }
}

// Imprimimos el conteo de cada sonido
console.log(soundCount);
