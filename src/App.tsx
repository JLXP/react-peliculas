import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(()=>{
    const timeId = setInterval (()=>{
      setHoraActual(new Date());
    }, 1000);

    return ()=> clearInterval(timeId);
  })

  return (
    <div>
      <h3>Ejemplo React</h3>
      <input/>
      <div>{horaActual.toString()}</div>
    </div>
  )
}

export default App
