import PeliculaIndividual from "./features/peliculas/components/PeliculaIndividual";
import type Pelicula from "./features/peliculas/models/pelicula.model";

export default function App() {
  const pelicula: Pelicula = {
    id: 1,
    titulo: "Sonic 3",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
  };

  return (
    <>
      <PeliculaIndividual pelicula={pelicula} />
    </>
  );
}
