import { useNavigate } from "react-router";
import Boton from "../../../components/Boton";

const IndiceActores = () => {
  const navigate= useNavigate();
  return (
    <>
      <div>Actores</div>
      <Boton onClick={() => navigate("/actores/crear")}>Crear Actor</Boton>
    </>
  );
};
export default IndiceActores;
