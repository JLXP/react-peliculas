import { useForm, type SubmitHandler } from "react-hook-form";
import Boton from "../../../components/Boton";
import ListadoPeliculas from "./ListadoPeliculas";
import Paginacion from "../../../components/Paginacion";
import type PeliculasFiltrarDTO from "../models/PeliculasFiltrar.model";
import useFiltroPelicula from "../hooks/useFiltroPelicula";

const FiltrarPeliculas = () => {

  const valorInicial: PeliculasFiltrarDTO = {
          titulo: "",
          generoId: 0,
          proximosEstrenos: false,
          enCines: false,
        };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm<PeliculasFiltrarDTO>({
    defaultValues: valorInicial,
  });

  const onSubmit: SubmitHandler<PeliculasFiltrarDTO> = async (data) => {
    await buscarPeliculas(data);
  };

  const {buscarPeliculas, generos, pagina, recordsPorPagina, cantidadTotalRegistros, setPagina, setRecordsPorPagina, peliculas} = useFiltroPelicula(valorInicial,setValue);

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

