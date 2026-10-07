import { useParams } from "react-router";

const EditarCine = () => {
  const { id } = useParams();

  return (
    <>
      <div>EditarCine</div>
      <p>El id es {id}</p>
    </>
  );
};
export default EditarCine;
