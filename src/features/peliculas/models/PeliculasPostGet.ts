import type Cine from "../../cines/models/Cine.model";
import type Genero from "../../generos/models/Genero.model";

export default interface PeliculasPostGet{
    generos: Genero[];
    cines: Cine[];
}