import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type ActorCreacion from "../models/ActorCreacion.model";
import FormularioActor from "./FormularioActor";
import Cargando from "../../../components/Cargando";
import type { SubmitHandler } from "react-hook-form";

const onSubmit: SubmitHandler<ActorCreacion> = async(data)=>{
  console.log('Editando actor...');
  await new Promise(resolve=> setTimeout(resolve, 2000));
  console.log(data);
}

const EditarActor = () => {
  const { id } = useParams();
  const [modelo, setModelo] = useState<ActorCreacion | undefined>();

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setModelo({nombre: 'Tom' + id, fechaNacimiento:'2022-11-23'})
    },1000)
    return () => clearTimeout(timerId);
  })


  return (
    <>
      <h3>Editar Actor</h3>
      {modelo? <FormularioActor modelo={modelo} onSubmit={onSubmit} />: <Cargando/>}
    </>
  );
};
export default EditarActor;
