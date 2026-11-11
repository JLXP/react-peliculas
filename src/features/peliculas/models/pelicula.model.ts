import type Cine from "../../cines/models/Cine.model";
import type Genero from "../../generos/models/Genero.model";
import type ActorPelicula from "./ActorPelicula.model";

export default interface Pelicula{
    id: number;
    titulo: string;
    poster: string;
    fechaLanzamiento: string;
    trailer: string;
    generos?: Genero[];
    cines?: Cine[];
    actores: ActorPelicula[];
}