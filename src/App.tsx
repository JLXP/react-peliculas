import { useState } from "react";
import ContenidoDinamicoIf from "./ContenidoDinamicoIf";

export default function App() {
  const [calificacion, setCalificacion] = useState<number | null>(null);

  return (
    <>
      <label>Ingrese la calificacion:</label>
      <input
        type="number"
        onChange={(e) => setCalificacion(Number(e.target.value))}
      />

      {calificacion ? (
        <ContenidoDinamicoIf calificacion={calificacion} />
      ) : undefined}
    </>
  );
}
