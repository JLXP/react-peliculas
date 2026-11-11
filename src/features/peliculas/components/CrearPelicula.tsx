import type { SubmitHandler } from "react-hook-form";
import FormularioPelicula from "./FormularioPelicula";
import type PeliculaCreacion from "../models/PeliculaCreacion.model";
import type Genero from "../../generos/models/Genero.model";
import type Cine from "../../cines/models/Cine.model";
import { useEffect, useState } from "react";
import clienteAPI from "../../../api/clienteAxios";
import type PeliculasPostGet from "../models/PeliculasPostGet";
import Cargando from "../../../components/Cargando";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";
import convertirPeliculaCreacionAFormData from "../utilidades/convertirPeliculaCreacionAFormData";
import type Pelicula from "../models/Pelicula.model";
import { useNavigate } from "react-router";

const CrearPelicula = () => {
  const navigate = useNavigate();
  const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<
    Genero[]
  >([]);
  const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<Cine[]>([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState<string[]>([]);

  useEffect(() => {
    clienteAPI.get<PeliculasPostGet>(`/peliculas/postget`).then((res) => {
      setGenerosNoSeleccionados(res.data.generos);
      setCinesNoSeleccionados(res.data.cines);
      setCargando(false);
    });
  }, []);

  const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
    try {
      const formData = convertirPeliculaCreacionAFormData(data);
      const respuesta = await clienteAPI.postForm<Pelicula>("/peliculas", formData);
      navigate(`/peliculas/${respuesta.data.id}`);
    } catch (err) {
      const errores = extraerErrores(err as AxiosError);
      setErrores(errores);
    }
  };

  return (
    <>
      <h3>Crear Pelicula</h3>
      {cargando ? (
        <Cargando />
      ) : (
        <FormularioPelicula
          errores={errores}
          onSubmit={onSubmit}
          generosSeleccionados={[]}
          generosNoSeleccionados={generosNoSeleccionados}
          cinesSeleccionados={[]}
          cinesNoSeleccionados={cinesNoSeleccionados}
          actoresSeleccionados={[]}
        />
      )}
    </>
  );
};
export default CrearPelicula;
