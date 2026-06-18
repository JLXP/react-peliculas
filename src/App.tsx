import { useState } from "react";

function App() {

  const [texto, setTexto] = useState('');

  let texto2 = '';
  console.log(texto2);


  const manejarClick = () => alert('click');

  const manejarKeyUp = (e:React.KeyboardEvent<HTMLInputElement>)=>
  {
    texto2 = e.currentTarget.value;
    setTexto(e.currentTarget.value);
  }
  //coment
    

  return (
    <>
      <h1 className="rojo">Hola Mundo</h1>
      <button onClick={manejarClick}>Clickeame</button>
      <div>
        <input onKeyUp={(e)=> manejarKeyUp(e)}/>
      </div>
      <div>
        <p>Haz escrito: {texto}</p>
      </div>
    </>
    
  )
}

export default App

