import {
  identidad,
} from "@/app/data/categorias";


import type {
  Categoria,
} from "@/app/types";


const categorias: Categoria[] = [
  identidad,
];


export function getCategorias(): Categoria[] {
  return categorias;
}