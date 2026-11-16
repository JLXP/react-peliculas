import { useEffect, useState } from "react";
import styles from "./Rating.module.css";
import Swal from "sweetalert2";
import { usuarioLogueado } from "../../features/seguridad/utilidades/ManejadorJWT";

export default function Rating(props: RatingProps) {
  const [maximoValorArreglo, setMaximoValorArreglo] = useState<number[]>([]);
  const [valorSeleccionadoTemporal, setValorSeleccionadoTemporal] = useState(
    props.valorSeleccionado,
  );
  const [votoUsuario, setVotoUsuario] = useState(props.valorSeleccionado);

  useEffect(() => {
    setMaximoValorArreglo(Array(props.maximoValor).fill(0));
  }, [props.maximoValor]);

  function manejarMouseEnter(voto: number) {
    setValorSeleccionadoTemporal(voto);
  }

  function manejarMouseLeave() {
    setValorSeleccionadoTemporal(votoUsuario);
  }

  function manejaClick(voto: number) {
    const estaLogueado = usuarioLogueado();
    if (!estaLogueado) {
      Swal.fire({
        title: "error",
        text: "Debes loguearte para votar",
        icon: "error",
      });
    }

    setValorSeleccionadoTemporal(voto);
    setVotoUsuario(voto);
    props.onChange(voto);
  }

  return (
    <>
      {maximoValorArreglo.map((_, indice) => (
        <i
          key={indice}
          onMouseLeave={manejarMouseLeave}
          onMouseEnter={() => manejarMouseEnter(indice + 1)}
          onClick={() => manejaClick(indice + 1)}
          className={`bi bi-star-fill ms-1 ${indice < valorSeleccionadoTemporal ? styles.checked : null}`}
        ></i>
      ))}
    </>
  );
}

interface RatingProps {
  maximoValor: number;
  valorSeleccionado: number;
  onChange(voto: number): void;
}
