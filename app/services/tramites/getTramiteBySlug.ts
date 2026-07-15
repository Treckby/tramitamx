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
  nss,
  
];


export function getTramiteBySlug(
  slug: string
): Tramite | undefined {

  return tramites.find(
    (tramite) =>
      tramite.slug === slug
  );

}