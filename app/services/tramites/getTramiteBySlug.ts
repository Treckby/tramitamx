import {
  curp,
  actaNacimiento,
  rfc,
  constanciaFiscal,
  nss,
} from "@/app/data/tramites/identidad";

import type { Tramite } from "@/app/types";
import {
  licenciaConducir,
} from "@/app/data/tramites/vehiculos";

const tramites: Tramite[] = [
  curp,
  actaNacimiento,
  rfc,
  constanciaFiscal,
  nss,
  licenciaConducir
];


export function getTramiteBySlug(
  slug: string
): Tramite | undefined {

  return tramites.find(
    (tramite) =>
      tramite.slug === slug
  );

}