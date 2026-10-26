export default function MostrarErrores(props: MostrarErroresProps){
    return(
        <>
            <ul>
                {props.errores.map(err => <li key={err}>{err}</li>)}
            </ul>
        </>
    )
}

interface MostrarErroresProps{
    errores: string[];
}