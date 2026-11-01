import type { SubmitHandler } from "react-hook-form";
import FormularioActor from "./FormularioActor";
import type ActorCreacion from "../models/ActorCreacion.model";
import { useState } from "react";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";
import clienteAPI from "../../../api/clienteAxios";



const CrearActor = () => {
  const [errores, setErrores] = useState<string[]>([]);
  const navigate = useNavigate();


  const onSubmit: SubmitHandler<ActorCreacion> = async(data)=>{
  try{
     await clienteAPI.postForm('/actores',data);
     navigate('/actores');

  }catch(error){
    const errores = extraerErrores(error as AxiosError);
    setErrores(errores)
  }
}



  return (
    <>
      <h3>Crear Actor</h3>
      <FormularioActor errores={errores} onSubmit={onSubmit} />
    </>
  )
}
export default CrearActor