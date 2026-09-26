import { useEffect, useState } from "react";

export default function EjemploUseEffect() {
  const [clicks, setClicks] = useState(0);
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    console.log("El componente ha cargado");

    return () => console.log("El componente se va a desmontar");
  },[]);

  useEffect(() => {
    console.log("hook del clic");
    document.title = `${clicks} veces`;
  },[clicks]);



  useEffect(()=>{
    const timeId = setInterval(()=>{
        setHora(new Date());
    }, 1000);

    return () => clearInterval(timeId);
  });

  return (
    <>
      <h2>Ejemplo de useEffect</h2>
      <div>
        <button onClick={() => setClicks(clicks + 1)}>
          Me has clickeado {clicks} veces
        </button>
      </div>
      <div>La hora actual es {hora.toTimeString()}</div>
    </>
  );
}
