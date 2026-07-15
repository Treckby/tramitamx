import {
  getTramites,
} from "./getTramites";


import type {
  Tramite,
} from "@/app/types";



export function getRelatedTramites(
  tramite: Tramite
): Tramite[] {


  return getTramites()

    .filter(
      (item) =>
        item.id !== tramite.id &&
        item.categoriaId === tramite.categoriaId
    )

    .slice(0,3);

}