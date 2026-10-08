import { useForm, type SubmitHandler } from "react-hook-form";
import type ActorCreacion from "../models/ActorCreacion.model";
import Boton from "../../../components/Boton";
import { NavLink } from "react-router";

export default function FormularioActor(props: FormularioActorProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ActorCreacion>({
    defaultValues: props.modelo ?? { nombre: "" },
  });

  return(
    <form onSubmit = {handleSubmit(props.onSubmit)}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" autoComplete="off" className="form-control" {...register('nombre')}/>
            {errors.nombre && <p className="error">{errors.nombre.message}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="fechaNacimiento">Fecha Nacimiento</label>
            <input type="date" id="fechaNacimiento" autoComplete="off" className="form-control" {...register('fechaNacimiento')}/>
            {errors.fechaNacimiento && <p className="error">{errors.fechaNacimiento.message}</p>}
        </div>
        <div className="mt-2">
            <Boton type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
                <NavLink className="btn btn-secondary ms-2" to="/actores">Cancelar</NavLink>
            </Boton>
        </div>
    </form>
  )
}

interface FormularioActorProps {
  modelo?: ActorCreacion;
  onSubmit: SubmitHandler<ActorCreacion>;
}
