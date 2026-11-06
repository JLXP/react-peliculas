import type Pelicula from "../../../peliculas/models/Pelicula.model";

export default interface LandingPageDTO {
    enCines?: Pelicula[];
    proximosEstrenos? : Pelicula[];
}