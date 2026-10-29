import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type GeneroCreacion from "../models/GeneracionCreacion.model";
import FormularioGenero from "./FormularioGenero";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../components/Cargando";
import clienteAPI from "../../../api/clienteAxios";
import type Genero from "../models/Genero.model";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";

const EditarGenero = () => {
  const { id } = useParams();
  const [modelo, setModelo] = useState<GeneroCreacion | undefined>(undefined);
  const navigate = useNavigate();
  const [errores, setErrores] = useState<string[]>([]); 

  useEffect(() => {
    clienteAPI.get<Genero>(`/genero/${id}`).then(res=>setModelo(res.data)).catch(
      () => navigate('/genero')
    );
  }, [id, navigate]);

  const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
    
    try{
      await clienteAPI.put(`/genero/${id}`,data);
      navigate('/genero');
    }catch(err){
      const errores = extraerErrores(err as AxiosError)
      setErrores(errores);
    }

  };

  return (
    <>
      <h3>Editar Genero</h3>
      {modelo ? (
        <FormularioGenero errores={errores} modelo={modelo} onSubmit={onSubmit} />
      ) : (
        <Cargando />
      )}
    </>
  );
};
export default EditarGenero;
