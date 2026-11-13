import { Outlet } from "react-router";
import Autorizado from "./Autorizado";

export default function RutaProtegida(props: RutaProtegidaProps) {
  return (
    <Autorizado
      claims={props.claims}
      autorizado={<Outlet />}
      noAutorizado={<>No se te permite visualziar este contenido</>}
    />
  );
}

interface RutaProtegidaProps {
  claims: string[];
}
