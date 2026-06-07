function App() {

  const subtitulo = 'Este es otro subtitulo';

  const duplicar = (valor:number)=> valor * 2;
  const imagenURL = '/vite.svg';

  return (
    <>
      <h1>Hola Mundo</h1>
      <h3>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <img src={imagenURL} alt="logo vista"/>
    </>
    
  )
}

export default App

