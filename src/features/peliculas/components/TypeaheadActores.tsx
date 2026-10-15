import { Typeahead } from "react-bootstrap-typeahead";
import type ActorPelicula from "../models/ActorPelicula.model";
import type { Option } from "react-bootstrap-typeahead/types/types";

export default function TypeaheadActores() {
  const actores: ActorPelicula[] = [
    {
      id: 1,
      nombre: "Tom Holland",
      personaje: "",
      foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/TomHolland-byPhilipRomano.jpg/960px-TomHolland-byPhilipRomano.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    },
    {
      id: 2,
      nombre: "Marisa Tomei",
      personaje: "",
      foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Marisa_Tomei_Photo_Op_GalaxyCon_Raleigh_2024_%28cropped%29.jpg/960px-Marisa_Tomei_Photo_Op_GalaxyCon_Raleigh_2024_%28cropped%29.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    },
    {
      id: 3,
      nombre: "Tom Hanks",
      personaje: "",
      foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/960px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    },
  ];

  const seleccion: ActorPelicula[] = [];

  return (
    <>
      <label>Actores</label>
      <Typeahead
        id="typeahead"
        onChange={(actores: Option[]) => {}}
        labelKey={(opcion: Option) => {
          const actor = opcion as ActorPelicula;
          return actor.nombre;
        }}
        options={actores}
        filterBy={["nombre"]}
        placeholder="Escriba el nombre del actor"
        minLength={2}
        flip={true}
        selected={seleccion}
        renderMenuItemChildren={(opcion: Option) => {
          const actor = opcion as ActorPelicula;
          return (
            <>
              <img
                alt="imagen actor"
                src={actor.foto}
                style={{
                  height: "64px",
                  width: "64px",
                  marginRight: "10px",
                }}
              />
              <span>{actor.nombre}</span>
            </>
          );
        }}
      />
    </>
  );
}
