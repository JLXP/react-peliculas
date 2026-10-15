import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type PeliculaCreacion from "../models/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../components/Cargando";
import type Genero from "../../generos/models/Genero.model";

const EditarPelicula = () => {
  const [modelo, setModelo] = useState<PeliculaCreacion | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setModelo({
        titulo: "Avengers" + id,
        fechaLanzamiento: "2020-05-11",
        trailer: "abc",
        poster: "",
      });
    });
  }, [id]);

  const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
    console.log("creando pelicula...");
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
  };

   const generosSeleccionados: Genero[] = [{ id: 2, nombre: "Drama" },];
    const generoNoSeleccionados: Genero[] = [
      { id: 1, nombre: "Accion" },
      
      { id: 3, nombre: "Comedia" },
    ];

  return (
    <>
      <h3>Editar Pelicula</h3>
      {modelo ? (
        <FormularioPelicula modelo={modelo} onSubmit={onSubmit} generosNoSeleccionados={generoNoSeleccionados} generosSeleccionados={generosSeleccionados}/>
      ) : (
        <Cargando />
      )}
    </>
  );
};
export default EditarPelicula;
