import type Cine from "../../cines/models/Cine.model";
import type Genero from "../../generos/models/Genero.model";
import type ActorPelicula from "./ActorPelicula.model";
import type Pelicula from "./Pelicula.model";

export default interface PeliculasPutGet{
    pelicula: Pelicula;
    generosSeleccionados: Genero[];
    generosNoSeleccionados: Genero[];
    cinesSeleccionados: Cine[];
    cinesNoSeleccionados: Cine[];
    actores: ActorPelicula[];
}