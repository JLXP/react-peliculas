import { useForm, type SubmitHandler } from "react-hook-form";
import Boton from "../../../components/Boton";
import type Genero from "../../generos/models/Genero.model";
import { useEffect, useState } from "react";
import type Pelicula from "../models/Pelicula.model";
import clienteAPI from "../../../api/clienteAxios";
import ListadoPeliculas from "./ListadoPeliculas";
import { useSearchParams } from "react-router";
import Paginacion from "../../../components/Paginacion";

const FiltrarPeliculas = () => {
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [peliculas, setPeliculas] = useState<Pelicula[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagina, setPagina] = useState(
    searchParams.has("pagina") ? parseInt(searchParams.get("pagina")!, 10) : 1,
  );
  const [recordsPorPagina, setRecordsPorPagina] = useState(
    searchParams.has("recordsPorPagina") ? parseInt(searchParams.get("recordsPorPagina")!, 10) : 2,
  );
  const [cantidadTotalRegistros, setCantidadTotalRegistros] = useState(0);

  useEffect(() => {
    clienteAPI
      .get<Genero[]>("/generos/todos")
      .then((res) => setGeneros(res.data));
  }, []);

  useEffect(() => {
    if (generos.length == 0) {
      return;
    }

    console.log("use effect buscar peliculas");

    if (searchParams.has("titulo")) {
      valorInicial.titulo = searchParams.get("titulo")!;
      setValue("titulo", valorInicial.titulo);
    }

    if (searchParams.has("generoId")) {
      valorInicial.generoId = parseInt(searchParams.get("generoId")!, 10);
      setValue("generoId", valorInicial.generoId);
    }

    if (searchParams.has("enCines")) {
      valorInicial.enCines = Boolean(searchParams.get("enCines"));
      setValue("enCines", valorInicial.proximosEstrenos);
    }

    if (searchParams.has("proximosEstrenos")) {
      valorInicial.enCines = Boolean(searchParams.get("proximosEstrenos"));
      setValue("proximosEstrenos", valorInicial.proximosEstrenos);
    }

    buscarPeliculas(valorInicial);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generos, pagina, recordsPorPagina]);

  function modificarURL(valores: FormType) {
    const params = new URLSearchParams();

    if (valores.titulo) {
      params.set("titulo", valores.titulo);
    }

    if (valores.generoId) {
      params.set("generoId", String(valores.generoId));
    }

    if (valores.enCines) {
      params.set("enCines", String(valores.enCines));
    }

    if (valores.proximosEstrenos) {
      params.set("proximosEstrenos", String(valores.proximosEstrenos));
    }

    params.set("pagina", String(pagina));
    params.set("recordsPorPagina", String(recordsPorPagina));

    setSearchParams(params);
  }

  const valorInicial: FormType = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  async function buscarPeliculas(valores: FormType) {
    modificarURL(valores);
    try {
      const respuesta = await clienteAPI.get<Pelicula[]>("/peliculas/filtrar", {
        params: { ...valores, pagina, recordsPorPagina },
      });
      const cantidadTotalRegistros = parseInt(
        respuesta.headers["cantidad-total-registros"],
        10,
      );
      setCantidadTotalRegistros(cantidadTotalRegistros);
      setPeliculas(respuesta.data);
    } catch (err) {
      console.error(err);
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    setValue,
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
          <Boton
            onClick={() => {
              reset();
              buscarPeliculas(valorInicial);
            }}
            className="btn btn-danger ms-2"
          >
            Limpiar
          </Boton>
        </div>
      </form>

      <div className="mt-4">
        <Paginacion
          paginaActual={pagina}
          registrosPorPagina={recordsPorPagina}
          cantidadTotalRegistros={cantidadTotalRegistros}
          registrosPorPaginaOpciones={[2, 10, 50]}
          onCambioPaginacion={(pagina, recordosPorPagina) => {
            setPagina(pagina);
            setRecordsPorPagina(recordosPorPagina);
          }}
        />
      </div>

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
