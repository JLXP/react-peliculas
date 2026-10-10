import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CineCreacion from "../models/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../components/Cargando";

const EditarCine = () => {
  const { id } = useParams();
  const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);

  const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
      console.log("creando el cine...");
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log(data);
    };


  useEffect(() => {
    setTimeout(()=>{
      setModelo({nombre: 'Sambil'})
    },1000)

  }, [id]);

  return (
    <>
      <div>EditarCine</div>
      {modelo ? <FormularioCine modelo={modelo} onSubmit={onSubmit}/>:<Cargando/>}
    </>
  );
};
export default EditarCine;
