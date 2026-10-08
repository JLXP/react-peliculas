import { useForm, type SubmitHandler } from "react-hook-form";
import Boton from "../../../components/Boton";
import type Genero from "../../generos/models/Genero.model";

const FiltrarPeliculas = () => {
  const valorInicial: FormType = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormType>({
    defaultValues: valorInicial,
  });

  const generos: Genero[] = [
    { id: 1, nombre: "Accion" },
    { id: 2, nombre: "Comedia" },
  ];

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    console.log("filtrando...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
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
