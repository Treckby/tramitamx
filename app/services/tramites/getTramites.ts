import {
  curp,
  actaNacimiento,
  rfc,
} from "@/app/data/tramites/identidad";

import type { Tramite } from "@/app/types";


const tramites: Tramite[] = [
  curp,
  actaNacimiento,
  rfc,
];


export function getTramites(): Tramite[] {
  return tramites;
}