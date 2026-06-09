function App() {


  const manejarClick = () => alert('click');

  const manejarKeyUp = (e:React.KeyboardEvent<HTMLInputElement>)=> texto = e.currentTarget.value;
  let texto = '';

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

