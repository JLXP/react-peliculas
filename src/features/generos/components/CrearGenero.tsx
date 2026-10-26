import {  type SubmitHandler } from "react-hook-form";
import type GeneroCreacion from "../models/GeneracionCreacion.model";
import FormularioGenero from "./FormularioGenero";
import clienteAPI from "../../../api/clienteAxios";
import { useNavigate } from "react-router";

const CrearGenero = () => {
  
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
    clienteAPI.post('/generos',data).then(()=> navigate('/generos'));
  };

  return (
    <>
      <h3>Crear Genero</h3>
      <FormularioGenero onSubmit={onSubmit}/>
    </>
  );
};
export default CrearGenero;


