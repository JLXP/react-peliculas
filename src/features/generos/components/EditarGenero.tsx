import { useParams } from "react-router";

const EditarGenero = () => {
  const { id } = useParams();
  return (
    <>
      <h3>EditarGenero</h3>
      <p>El id es {id}</p>
    </>
  );
};
export default EditarGenero;
