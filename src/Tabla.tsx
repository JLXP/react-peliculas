import { useState } from "react";
import type Persona from "./persona.model";

export default function Tabla() {
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

  const removerPersona = (persona: Persona) => {
    setPersonas(personas.filter((p) => p.id !== persona.id));
  };

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
        {personasFuentes.map((p) => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td>{p.departamento}</td>
            <td>
              <button onClick={() => removerPersona(p)}>Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
