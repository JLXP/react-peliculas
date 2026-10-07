import { Route, Routes } from "react-router";
import IndiceGeneros from "./features/generos/components/IndiceGeneros";
import LandingPage from "./features/home/components/LandingPage";
import CrearGenero from "./features/generos/components/CrearGenero";
import EditarGenero from "./features/generos/components/EditarGenero";
import IndiceActores from "./features/actores/components/IndiceActores";
import CrearActor from "./features/actores/components/CrearActor";
import EditarActor from "./features/actores/components/EditarActor";
import IndiceCines from "./features/cines/components/IndiceCines";
import CrearCine from "./features/cines/components/CrearCine";
import EditarCine from "./features/cines/components/EditarCine";
import CrearPelicula from "./features/peliculas/components/CrearPelicula";
import EditarPelicula from "./features/peliculas/components/EditarPelicula";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/generos" element={<IndiceGeneros />} />
      <Route path="/generos/crear" element={<CrearGenero />} />
      <Route path="/generos/editar/:id" element={<EditarGenero />} />

      <Route path="/actores" element={<IndiceActores />} />
      <Route path="/actores/crear" element={<CrearActor />} />
      <Route path="/actores/editar/:id" element={<EditarActor />} />

      <Route path="/cines" element={<IndiceCines />} />
      <Route path="/cines/crear" element={<CrearCine />} />
      <Route path="/cines/editar/:id" element={<EditarCine />} />

      <Route path="/peliculas/crear" element={<CrearPelicula />} />
      <Route path="/peliculas/editar/:id" element={<EditarPelicula />} />
    </Routes>
  );
}
