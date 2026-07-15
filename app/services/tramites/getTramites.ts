import {
  curp,
  actaNacimiento,
  rfc,
  constanciaFiscal,
  nss,
} from "@/app/data/tramites/identidad";
import {
  licenciaConducir,
} from "@/app/data/tramites/vehiculos";
import type { Tramite } from "@/app/types";


const tramites: Tramite[] = [
  curp,
  actaNacimiento,
  rfc,
  constanciaFiscal,
  nss,
  licenciaConducir

];


export function getTramites(): Tramite[] {
  return tramites;
}