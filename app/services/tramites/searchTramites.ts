import { getTramites } from "./getTramites";

export function searchTramites(
  query: string
) {

  const tramites = getTramites();


  if (!query.trim()) {
    return tramites;
  }


  const text = query.toLowerCase();


  return tramites.filter((tramite) =>
    tramite.titulo
      .toLowerCase()
      .includes(text)
    ||
    tramite.descripcion
      .toLowerCase()
      .includes(text)
    ||
    tramite.categoria
      .toLowerCase()
      .includes(text)
  );
}