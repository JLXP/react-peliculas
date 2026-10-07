import { useForm, type SubmitHandler } from "react-hook-form";
import Boton from "../../../components/Boton";
import { NavLink } from "react-router";

const CrearGenero = () => {
  const { register, handleSubmit } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  return (
    <>
      <h3>Crear Genero</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            autoComplete="off"
            className="form-control"
            {...register("nombre")}
          />
        </div>
        <div className="mt-2">
          <Boton type="submit">Enviar</Boton>
          <NavLink to="/generos" className="btn btn-secondary ms-2">
            Cancelar
          </NavLink>
        </div>
      </form>
    </>
  );
};
export default CrearGenero;

interface FormType {
  nombre: string;
}
