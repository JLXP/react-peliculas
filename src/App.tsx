import { useState } from "react";
import ContenidoDinamico from "./ContenidoDinamico";

export default function App() {

  const [mostrar, setMostrar] = useState(false); 
    

  return (
    <>
        <input type="checkbox" onChange={e=> setMostrar(e.target.checked)}/>
        <label>Mostrar el mensaje oculto</label>
        <ContenidoDinamico mostrarContenido={ }/>
    </>
    
  )
}



