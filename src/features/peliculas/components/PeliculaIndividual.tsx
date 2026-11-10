import { useNavigate } from "react-router";
import Boton from "../../../components/Boton";
import type Pelicula from "../models/Pelicula.model";
import styles from './PeliculaIndividual.module.css'

export default function PeliculaIndividual(props: PeliculaIndividualProps){

    const construirLink = () => `/pelicula/${props.pelicula.id}`;
    const navigate = useNavigate();

    return (
        <div className={styles.div}>
            <a
            href={construirLink()}>
                <img alt="Poster" src={props.pelicula.poster}/>
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
            <div>
                <Boton onClick={()=>navigate(`pelicula/editar/${props.pelicula.id}`)}>Editar</Boton>
            </div>
        </div>
    )
}

interface PeliculaIndividualProps{
    pelicula: Pelicula
}