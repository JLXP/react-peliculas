import { type SubmitHandler } from "react-hook-form";
import type GeneroCreacion from "../models/GeneracionCreacion.model";
import FormularioGenero from "./FormularioGenero";
import clienteAPI from "../../../api/clienteAxios";
import { useNavigate } from "react-router";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import { useState } from "react";
import type { AxiosError } from "axios";

const CrearGenero = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);



  const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
    try {
      clienteAPI.post("/genero", data);
      navigate("/generos");
    } catch (err) {
      const errores = extraerErrores(err as AxiosError);
      setErrores(errores);
    }
  };

  return (
    <>
      <h3>Crear Genero</h3>
      <FormularioGenero errores={errores} onSubmit={onSubmit} />
    </>
  );
};
export default CrearGenero;
