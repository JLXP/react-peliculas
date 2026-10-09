export default function SeleccionarImagen(props: SeleccionarImagenProps) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
    </div>
  );
}

interface SeleccionarImagenProps {
  label: string;
  imagenURL?: string;
  imagenSeleccionada: (file: File) => void;
}
