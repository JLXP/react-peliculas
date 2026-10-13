import type { SubmitHandler } from "react-hook-form";
import FormularioPelicula from "./FormularioPelicula";
import type PeliculaCreacion from "../models/PeliculaCreacion.model";

const CrearPelicula = () => {
  const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
    console.log("creando pelicula...");
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
  };

  return (
    <>
      <h3>Crear Pelicula</h3>
      <FormularioPelicula onSubmit={onSubmit} />
    </>
  );
};
export default CrearPelicula;
