import {
  getCategorias,
} from "./getCategorias";


export function getCategoriaBySlug(
  slug: string
) {

  const categorias = getCategorias();


  return categorias.find(
    (categoria) =>
      categoria.slug === slug
  );

}