import {  type SubmitHandler } from "react-hook-form";
import type GeneroCreacion from "../models/GeneracionCreacion.model";
import FormularioGenero from "./FormularioGenero";

const CrearGenero = () => {
  

  const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
    console.log('creando el genero...')
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <>
      <h3>Crear Genero</h3>
      <FormularioGenero onSubmit={onSubmit}/>
    </>
  );
};
export default CrearGenero;


