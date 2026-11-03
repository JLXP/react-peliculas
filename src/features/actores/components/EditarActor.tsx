import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type ActorCreacion from "../models/ActorCreacion.model";
import FormularioActor from "./FormularioActor";
import Cargando from "../../../components/Cargando";
import type { SubmitHandler } from "react-hook-form";
import clienteAPI from "../../../api/clienteAxios";
import formatearFecha from "../../../utilidades/formatearFecha";
import type { AxiosError } from "axios";
import { extraerErrores } from "../../../utilidades/extraerErrores";

const EditarActor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modelo, setModelo] = useState<ActorCreacion | undefined>();
  const [errores, setErrores] = useState<string[]>([]);

  useEffect(() => {
    clienteAPI.get(`/actor/${id}`).then((res) => {
      const actor = res.data;

      const actorCreacion: ActorCreacion = {
        nombre: actor.nombre,
        fechaNacimiento: formatearFecha(actor.fechaNacimiento),
        foto: actor.foto,
      };

      setModelo(actorCreacion);
    });
  }, [id]);

  const onSubmit: SubmitHandler<ActorCreacion> = async (data) => {
    try{
      await clienteAPI.putForm(`actor/${id}`, data);
      navigate('/actores');
    }catch(err){
      const errores = extraerErrores(err as AxiosError);
      setErrores(errores);
    }
  };

  return (
    <>
      <h3>Editar Actor</h3>
      {modelo ? (
        <FormularioActor errores={errores} modelo={modelo} onSubmit={onSubmit} />
      ) : (
        <Cargando />
      )}
    </>
  );
};
export default EditarActor;
