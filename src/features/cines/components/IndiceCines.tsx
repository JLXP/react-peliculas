import IndiceEntidades from "../../../components/IndiceEntidades";
import { useEntidades } from "../../../hooks/useEntidades";

import type Cine from "../models/Cine.model";

const IndiceCines = () => {
  const  entidadesHook = useEntidades<Cine>("/cine");
  
    return (
      <>
        <IndiceEntidades
          titulo="Cines"
          nombreEntidad="Cine"
          url="/cine"
          urlCrear="/cine/crear"
          {...entidadesHook}
        >
          {(cines, botones) => (
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
                {cines?.map((cine) => (
                  <tr key={cine.id}>
                    <td>{cine.nombre}</td>
                    <td className="text-end">
                     {botones(`/cine/editar/${cine.id}`, cine.id)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </IndiceEntidades>
      </>
    );
};
export default IndiceCines;
