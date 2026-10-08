import type { SubmitHandler } from "react-hook-form";
import FormularioActor from "./FormularioActor";
import type ActorCreacion from "../models/ActorCreacion.model";

const onSubmit: SubmitHandler<ActorCreacion> = async(data)=>{
  console.log('creando actor...');
  await new Promise(resolve=> setTimeout(resolve, 2000));
  console.log(data);
}

const CrearActor = () => {
  return (
    <>
      <h3>Crear Actor</h3>
      <FormularioActor onSubmit={onSubmit} />
    </>
  )
}
export default CrearActor