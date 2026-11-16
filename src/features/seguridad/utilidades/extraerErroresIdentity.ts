import type { AxiosError } from "axios";

export default function extraerErroresIdentity(obj: AxiosError): string[] {
  const data = obj.response?.data as RespuestaError[];
  const mensajesDeError: string[] = data.map((err) => err.descripcion);
  return mensajesDeError;
}

interface RespuestaError {
  code: string;
  descripcion: string;
}
