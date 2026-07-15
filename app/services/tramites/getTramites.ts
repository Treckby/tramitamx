import {
  curp,
  actaNacimiento,
  rfc,
  constanciaFiscal,
  nss,
} from "@/app/data/tramites/identidad";

import type { Tramite } from "@/app/types";


const tramites: Tramite[] = [
  curp,
  actaNacimiento,
  rfc,
  constanciaFiscal,
  nss
];


export function getTramites(): Tramite[] {
  return tramites;
}