export default function Paginacion(props: PaginacionProps) {
  const paginas = [];
  const cantidadMaximaPaginasMostrar = 5;
  const totalPaginas = Math.ceil(
    props.cantidadTotalRegistros / props.registrosPorPagina,
  );
  const radio = Math.floor(cantidadMaximaPaginasMostrar / 2);

  for (let i = 1; i <= totalPaginas; i++) {
    if (i >= props.paginaActual - radio && i <= props.paginaActual + radio) {
      paginas.push(i);
    }
  }
}

interface PaginacionProps {
  paginaActual: number;
  registrosPorPagina: number;
  cantidadTotalRegistros: number;
  registrosPorPaginaOpciones: number[];
  onCambioPaginacion: (pagina: number, registrosPorPagina: number) => void;
}
