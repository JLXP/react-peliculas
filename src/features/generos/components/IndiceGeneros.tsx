import { useNavigate } from "react-router";
import Boton from "../../../components/Boton";
import { useEffect, useState } from "react";
import clienteAPI from "../../../api/clienteAxios";
import type Genero from "../models/Genero.model";
import ListadoGenerico from "../../../components/ListadoGenerico";

export default function IndiceGeneros() {
  const navigate = useNavigate();
  const [generos, setGeneros] = useState<Genero[]>();

  useEffect(() => {
    clienteAPI.get<Genero[]>(`/genero`)
      .then((res) => setGeneros(res.data));
  }, []);

  return (
    <>
      <h3>Géneros</h3>
      <div>
        <Boton onClick={() => navigate("/generos/crear")}>Crear Genero</Boton>
      </div>
      <ListadoGenerico listado={generos}>
          <table className="table table-hover align-middle shadow-sm border rounded overflow hidden">
            <thead>
              <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col" className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {generos?.map((genero)=>
              <tr key={genero.id}>
                <td>{genero.nombre}</td>
                <td className="text-end">
                  <Boton className="btn btn-sm btn-outline-primary me-2" onClick={() => navigate(`/generos/editar/${genero.id}`)}><i className="bi bi-pencil me-1"></i>Editar</Boton>
                  <Boton className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i>Borrar</Boton>
                </td>
              </tr>)} 
            </tbody>
          </table>
      </ListadoGenerico>
    </>
  );
}
