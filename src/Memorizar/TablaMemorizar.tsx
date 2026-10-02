import { memo, useCallback, useState } from "react";
import FilaMemorizar from "./FilaMemorizar";
import type Persona from "../persona.model";
import { ErrorBoundary } from "react-error-boundary";

const TablaMemorizar = memo(function TablaMemorizar() {
  const personasFuentes: Persona[] = [
    { id: 1, nombre: "Felipe", departamento: "Ingenieria" },
    { id: 2, nombre: "Ana", departamento: "Contabilidad" },
    { id: 3, nombre: "Carlos", departamento: "Recursos Humanos" },
    { id: 4, nombre: "María", departamento: "Ventas" },
    { id: 5, nombre: "Jorge", departamento: "Marketing" },
    { id: 6, nombre: "Laura", departamento: "Finanzas" },
    { id: 7, nombre: "Miguel", departamento: "Sistemas" },
    { id: 8, nombre: "Sofía", departamento: "Operaciones" },
    { id: 9, nombre: "Daniel", departamento: "Logística" },
    { id: 10, nombre: "Valeria", departamento: "Administración" },
  ];

  const [personas, setPersonas] = useState(personasFuentes);

  const removerPersona = useCallback((persona: Persona) => {
    setPersonas((estadoActual) =>
      estadoActual.filter((p) => p.id !== persona.id),
    );
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Departamento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((p) => (
          <ErrorBoundary key={p.id} fallback={
            <>
              <tr>
                <td colSpan={3} style={{color:'red'}}>--Error:{p.nombre}</td>
              </tr>
            </>
          }>
            <FilaMemorizar persona={p} remover={removerPersona} />
          </ErrorBoundary>
        ))}
      </tbody>
    </table>
  );
});

export default TablaMemorizar;
