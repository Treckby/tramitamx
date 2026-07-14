import { curp } from "@/app/data/tramites/identidad/curp";
import type { Tramite } from "@/app/types";


const tramites: Tramite[] = [
  curp,
];


export function getTramites(): Tramite[] {
  return tramites;
}