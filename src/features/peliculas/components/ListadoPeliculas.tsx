import type Pelicula from "../models/pelicula.model";
import PeliculaIndividual from "./PeliculaIndividual";
import styles from "./ListadoPeliculas.module.css";

export default function ListadoPeliculas(props: ListadoPeliculasProps) {
  if (!props.peliculas) {
    return "Cargando...";
  } else if (props.peliculas.length === 0) {
    return "No existen peliculas para mostrar";
  } else {
    return (
      <div className={styles.div}>
        {props.peliculas?.map((pelicula) => (
          <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    );
  }
}

interface ListadoPeliculasProps {
  peliculas?: Pelicula[];
}
