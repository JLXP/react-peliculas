import { useEntidades } from "../../../hooks/useEntidades";
import type Genero from "../models/Genero.model";
import IndiceEntidades from "../../../components/IndiceEntidades";

export default function IndiceGeneros() {
  const  entidadesHook = useEntidades<Genero>("/genero");

  return (
    <>
      <IndiceEntidades
        titulo="Géneros"
        nombreEntidad="Genero"
        url="/genero"
        urlCrear="/generos/crear"
        {...entidadesHook}
      >
        {(generos, botones) => (
          <>
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
                   {botones(`/generos/editar/${genero.id}`, genero.id)}
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndiceEntidades>
    </>
  );
}
