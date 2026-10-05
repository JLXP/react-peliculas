import ListadoPeliculas from "./features/peliculas/components/ListadoPeliculas";
import type Pelicula from "./features/peliculas/models/pelicula.model";

export default function App() {
  const enCines: Pelicula[] = [
    {
      id: 1,
      titulo: "Sonic 3",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    },
    {
      id: 2,
      titulo: "John Wick: Chapter 4",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    },
  ];

  const proximosEstrenos: Pelicula[] = [
    {
      id: 1,
      titulo: "Spider-Man: Far From Home",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    }
  ];

  return (
    <>
      <h3>En Cines</h3>
      <ListadoPeliculas peliculas={enCines} />

      <h3>Proximos Estrenos</h3>
      <ListadoPeliculas peliculas={proximosEstrenos} />
    </>
  );
}
