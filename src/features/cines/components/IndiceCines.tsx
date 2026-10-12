import { useNavigate } from "react-router";
import Boton from "../../../components/Boton";

const IndiceCines = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Cines</div>
      <Boton onClick={() => navigate("/cines/crear")}>Crear Cines</Boton>
    </>
  );
};
export default IndiceCines;
