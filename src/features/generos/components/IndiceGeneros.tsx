import { useNavigate } from "react-router";
import Boton from "../../../components/Boton";
import ListadoGenerico from "../../../components/ListadoGenerico";
import Paginacion from "../../../components/Paginacion";
import Cargando from "../../../components/Cargando";
import { useGeneros } from "../hooks/useGeneros";

export default function IndiceGeneros() {
  const navigate = useNavigate();
  const {
    cargando,
    pagina,
    recordsPorPagina,
    cantidadTotalRegistros,
    setPagina,
    setRecordsPorPagina,
    generos,
  }= useGeneros();

  return (
    <>
      <h3>Géneros</h3>
      <div>
        <Boton onClick={() => navigate("/generos/crear")}>Crear Genero</Boton>
      </div>

      {cargando ? (
        <Cargando />
      ) : (
        <div className="mt-4">
          <div className="mb-2">
            <Paginacion
              paginaActual={pagina}
              registrosPorPagina={recordsPorPagina}
              cantidadTotalRegistros={cantidadTotalRegistros}
              registrosPorPaginaOpciones={[5, 10, 50]}
              onCambioPaginacion={(pagina, recordsPorPagina) => {
                setPagina(pagina);
                setRecordsPorPagina(recordsPorPagina);
              }}
            />
          </div>

          <ListadoGenerico listado={generos}>
            <table className="table table-hover align-middle shadow-sm border rounded overflow hidden">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col" className="text-end">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {generos?.map((genero) => (
                  <tr key={genero.id}>
                    <td>{genero.nombre}</td>
                    <td className="text-end">
                      <Boton
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => navigate(`/generos/editar/${genero.id}`)}
                      >
                        <i className="bi bi-pencil me-1"></i>Editar
                      </Boton>
                      <Boton className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i>Borrar
                      </Boton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ListadoGenerico>
        </div>
      )}
    </>
  );
}
