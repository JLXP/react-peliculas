import styles from './App.module.css';


function App() {

  const subtitulo = 'Este es otro subtitulo';

  const duplicar = (valor:number)=> valor * 2;
  const imagenURL = '/vite.svg';

  const cuadradoRojo = {
    backgroundColor: 'red',
    width: '50px',
    height:'50px',
    marginLeft: '1rem'
  }

  return (
    <>
      <h1 className="rojo">Hola Mundo</h1>
      <div style={cuadradoRojo}></div>

      <h3 className={styles.color}>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>

      <div style={cuadradoRojo}></div>
      <img src={imagenURL} alt="logo vista"/>
    </>
    
  )
}

export default App

