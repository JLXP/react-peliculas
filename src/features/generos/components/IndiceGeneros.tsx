import { useNavigate } from "react-router";
import Boton from "../../../components/Boton";
import { useEffect } from "react";
import axios from "axios";

export default function IndiceGeneros() {
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:7256/api/generos').then(res=>console.log( res.data));
  },[])

  return (
    <>
      <h3>Géneros</h3>
      <Boton onClick={() => navigate("/generos/crear")}>Crear Genero</Boton>
    </>
  );
}
