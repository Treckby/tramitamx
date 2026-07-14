export const ESTATUS = [
  "Borrador",
  "Publicado",
  "Archivado",
] as const;

export type EstatusTramite =
  (typeof ESTATUS)[number];