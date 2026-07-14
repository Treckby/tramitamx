import type { Tramite } from "@/app/types";

export const curp: Tramite = {
  id: "curp",

  slug: "curp",

  titulo: "Consulta e impresión de CURP",

  descripcion:
    "Consulta, descarga e imprime tu Clave Única de Registro de Población (CURP) de forma gratuita.",

  categoriaId: "identidad",

  costo: "Gratuito",

  tiempoEstimado: "5 minutos",

  modalidad: "En línea",

  requisitos: [
    "Nombre(s)",
    "Primer apellido",
    "Segundo apellido",
    "Fecha de nacimiento",
    "Entidad de nacimiento",
    "Sexo",
  ],

  pasos: [
    "Ingresa al portal oficial.",
    "Captura tus datos personales.",
    "Verifica la información.",
    "Descarga el archivo PDF.",
  ],

  preguntasFrecuentes: [
    {
      pregunta: "¿Tiene costo?",
      respuesta: "No, el trámite es completamente gratuito.",
    },
    {
      pregunta: "¿Necesito crear una cuenta?",
      respuesta: "No, no es necesario registrarse.",
    },
  ],

  enlaces: [
    {
      titulo: "Portal oficial",
      url: "https://www.gob.mx/curp/",
    },
  ],
};