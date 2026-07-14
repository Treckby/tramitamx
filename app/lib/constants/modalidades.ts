export const MODALIDADES = [
  "En línea",
  "Presencial",
  "Mixto",
] as const;

export type ModalidadTramite =
  (typeof MODALIDADES)[number];