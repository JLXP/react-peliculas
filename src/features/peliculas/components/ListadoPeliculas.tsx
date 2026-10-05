import type Pelicula from "../models/pelicula.model";
import PeliculaIndividual from "./PeliculaIndividual";
import styles from './ListadoPeliculas.module.css'

export default function ListadoPeliculas(props: ListadoPeliculasProps) {
  return (
    <div className={styles.div}>
      {props.peliculas.map((pelicula) => (
        <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
}

interface ListadoPeliculasProps {
  peliculas: Pelicula[];
}
