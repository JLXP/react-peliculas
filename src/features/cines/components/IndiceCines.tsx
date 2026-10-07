import { useNavigate } from "react-router";
import Boton from "../../../components/Boton";

const IndiceCines = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Cines</div>
      <Boton onClick={() => navigate("/actores/crear")}>Crear Actor</Boton>
    </>
  );
};
export default IndiceCines;
