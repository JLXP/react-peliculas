import { useState } from "react";
import EjemploUseEffect from "./EjemploUseEffect";

export default function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <>
      <input
        type="checkbox"
        defaultChecked={mostrar}
        onChange={(e) => setMostrar(e.target.checked)}
      />{" "}
      Mostrar componente
      {mostrar ? <EjemploUseEffect /> : undefined}
    </>
  );
}
