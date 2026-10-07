import { useParams } from "react-router";

const EditarActor = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Editar Actor</h3>
      <p>El id es {id}</p>
    </>
  );
};
export default EditarActor;
