export const ROLES = [
  "Administrador",
  "Editor",
] as const;

export type RolUsuario =
  (typeof ROLES)[number];