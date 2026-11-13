import { useForm, type SubmitHandler } from "react-hook-form";
import Boton from "../../../components/Boton";
import type Genero from "../../generos/models/Genero.model";
import { useEffect, useState } from "react";
import type Pelicula from "../models/Pelicula.model";
import clienteAPI from "../../../api/clienteAxios";
import ListadoPeliculas from "./ListadoPeliculas";

const FiltrarPeliculas = () => {
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [peliculas, setPeliculas] = useState<Pelicula[]>();

  useEffect(() => {
    clienteAPI
      .get<Genero[]>("/generos/todos")
      .then((res) => setGeneros(res.data));
  }, []);

  
  useEffect(() => {
    buscarPeliculas(valorInicial);
  }, [generos]);


  function modificarURL(valores: FormType){
    const params = new URLSearchParams();


    if(valores.titulo){
      params.set('titulo', valores.titulo);
    }

    if(valores.generoId){
      params.set('generoId', String(valores.generoId));
    }

    if(valores.enCines){
      params.set('enCines', String(valores.enCines));
    }

    if(valores.proximosEstrenos){
      params.set('proximosEstrenos', String(valores.proximosEstrenos));
    }
  }

const valorInicial: FormType = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  async function buscarPeliculas(valores: FormType) {
    try {
      const respuesta = await clienteAPI.get<Pelicula[]>("/peliculas/filtrar", {
        params: valores,
      });
      setPeliculas(respuesta.data);
    } catch (err) {
      console.error(err);
    }
  }

  

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormType>({
    defaultValues: valorInicial,
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    await buscarPeliculas(data);
  };

  return (
    <>
      <h3>Filtro de Peliculas</h3>
      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-12">
          <input
            id="titulo"
            placeholder="Titulo de la pelicula"
            autoComplete="off"
            className="form-control"
            {...register("titulo")}
          />
        </div>
        <div className="col-12">
          <select className="form-select" {...register("generoId")}>
            <option value="0">--Seleccione un genero--</option>
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="proximosEstrenos"
              {...register("proximosEstrenos")}
            />
            <label htmlFor="proximosEstresnos">Proximos Estrenos</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="enCines"
              {...register("enCines")}
            />
            <label htmlFor="enCines">En Cines</label>
          </div>
        </div>
        <div className="col-12">
          <Boton disabled={isSubmitting} type="submit">
            {isSubmitting ? "Filtrando..." : "Filtrar"}
          </Boton>
          <Boton onClick={() => reset()} className="btn btn-danger ms-2">
            Limpiar
          </Boton>
        </div>
      </form>

      <div className="mt-4">
        <ListadoPeliculas peliculas={peliculas} />
      </div>
    </>
  );
};
export default FiltrarPeliculas;

interface FormType {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCines: boolean;
}
