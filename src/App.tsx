import { BrowserRouter } from "react-router";
import Menu from "./components/Menu";
import AppRoutes from "./AppRoutes";
import AutenticacionContext from "./features/seguridad/utilidades/AutenticacionContext";
import { useState } from "react";
import type Claim from "./features/seguridad/models/Claim";

export default function App() {
  const [claims, setClaims] = useState<Claim[]>([
    { nombre: "esadmind", valor: 'true' },
  ]);

  function actualizar(claims: Claim[]) {
    setClaims(claims);
  }

  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{ claims, actualizar }}>
          <Menu />
          <div className="container mb-4">
            <AppRoutes />
          </div>
        </AutenticacionContext.Provider>
      </BrowserRouter>
    </>
  );
}
