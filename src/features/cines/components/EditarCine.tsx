import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type CineCreacion from "../models/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../components/Cargando";
import clienteAPI from "../../../api/clienteAxios";
import type Cine from "../models/Cine.model";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";

const EditarCine = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);
  const [errores, setErrores] = useState<string[]>([]);

  const onSubmit: SubmitHandler<CineCreacion> = async (data) => {
    try {
      await clienteAPI.put(`cines/${id}`, data);
      navigate("/cines");
    } catch (err) {
      const errores = extraerErrores(err as AxiosError);
      setErrores(errores);
    }
  };

  useEffect(() => {
    clienteAPI
      .get<Cine>(`cine/${id}`)
      .then((res) => setModelo(res.data))
      .catch(() => navigate("/cines"));
  }, [id, navigate]);

  return (
    <>
      <div>EditarCine</div>
      {modelo ? (
        <FormularioCine errores={errores} modelo={modelo} onSubmit={onSubmit} />
      ) : (
        <Cargando />
      )}
    </>
  );
};
export default EditarCine;
