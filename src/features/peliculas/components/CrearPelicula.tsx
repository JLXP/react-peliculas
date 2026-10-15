import type { SubmitHandler } from "react-hook-form";
import FormularioPelicula from "./FormularioPelicula";
import type PeliculaCreacion from "../models/PeliculaCreacion.model";
import type Genero from "../../generos/models/Genero.model";

const CrearPelicula = () => {
  const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
    console.log("creando pelicula...");
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
  };

  const generosSeleccionados: Genero[] = [];
  const generoNoSeleccionados: Genero[] = [
    { id: 1, nombre: "Accion" },
    { id: 2, nombre: "Drama" },
    { id: 3, nombre: "Comedia" },
  ];

  return (
    <>
      <h3>Crear Pelicula</h3>
      <FormularioPelicula onSubmit={onSubmit} generosSeleccionados={generosSeleccionados} generosNoSeleccionados={generoNoSeleccionados}/>
    </>
  );
};
export default CrearPelicula;
