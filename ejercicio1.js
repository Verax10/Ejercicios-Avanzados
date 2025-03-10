const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categorias = [];

// Usamos un for...of para recorrer el array de películas
for (const movie of movies) {
  // Recorremos las categorías de cada película
  for (const category of movie.categories) {
    // Solo añadimos la categoría si no está ya en el array categorias
    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  }
}

console.log(categorias);
