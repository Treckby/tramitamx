import { curp } from "@/app/data/tramites/identidad/curp";
import type { Tramite } from "@/app/types";

const tramites: Tramite[] = [curp];

export function getTramiteBySlug(
  slug: string
): Tramite | undefined {
  return tramites.find((tramite) => tramite.slug === slug);
}