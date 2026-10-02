import { useState } from "react";
import EjemploMemorizarTabla from "./Memorizar/EjemploMemorizar";

export default function App() {
  const [texto, setTexto] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <p>El texto es: {texto}</p>
      <EjemploMemorizarTabla />
    </>
  );
}
