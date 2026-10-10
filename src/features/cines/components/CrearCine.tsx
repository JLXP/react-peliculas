import type { SubmitHandler } from "react-hook-form";
import type CineCreacion from "../models/CineCreacion.model";
import FormularioCine from "./FormularioCine";

const CrearCine = () => {
  const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
    console.log("creando el cine...");
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
  };

  return (
    <>
      <h3>Crear Cine</h3>
      <FormularioCine onSubmit={onSubmit} />
    </>
  );
};
export default CrearCine;
