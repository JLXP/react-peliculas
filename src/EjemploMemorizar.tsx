import { useMemo, useState } from "react";

export default function EjemploMemorizar() {
  const [numero, setNumero] = useState(1);
  const [nombre, setNombre] = useState("");

  const factorial = useMemo(() => {
    console.log("Calculando factorial");
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado = resultado * 1;
    }
    return resultado;
  },[numero]);

  return (
    <>
      <p>
        {" "}
        Calcuar el factorial de{" "}
        <input
          type="number"
          onChange={(e) => setNumero(Number(e.target.value))}
        />
      </p>
      <p>
        El factorial del {numero} es {factorial}
      </p>
      <p>
        Nombre:{" "}
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
      </p>
      <p>Hola, {nombre}</p>
    </>
  );
}
