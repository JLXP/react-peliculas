import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import { useState } from "react";
import type Coordenada from "./Coordenadas.model";

export default function Mapa() {
  const [coordenadas, setCoordenadas] = useState<Coordenada[]>();

  return (
    <MapContainer
      center={[20.9702968265148, -89.64033413445625]}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "500px" }}
    >
      <TileLayer
        attribution="React Peliculas"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ClickMap setPunto={(coordenada) => setCoordenadas([coordenada])} />

      {coordenadas?.map((coordenada) => (
        <Marker
          key={coordenada.lat + coordenada.lng}
          position={[coordenada.lat, coordenada.lng]}
        >
          {coordenada.mensaje ? <Popup>{coordenada.mensaje}</Popup> : undefined}
        </Marker>
      ))}
    </MapContainer>
  );
}

function ClickMap(props: ClickMapaProps) {
  useMapEvent("click", (e) => {
    props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
  });
  return null;
}

interface ClickMapaProps {
  setPunto: (coordenada: Coordenada) => void;
}
