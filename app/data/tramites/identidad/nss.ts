import type { Tramite } from "@/app/types";


export const nss: Tramite = {

  id: "nss",

  slug:
    "numero-seguridad-social",


  titulo:
    "Número de Seguridad Social (NSS)",


  descripcion:
    "Consulta o asigna tu Número de Seguridad Social del IMSS.",


  categoriaId:
    "identidad",


  costo:
    "Gratis",


  tiempoEstimado:
    "Inmediato",


  modalidad:
    "En línea",


  requisitos: [

    "CURP",

    "Correo electrónico",

  ],


  pasos: [

    "Ingresar al portal del IMSS",

    "Capturar CURP y correo electrónico",

    "Descargar o consultar el NSS",

  ],


  preguntasFrecuentes: [

    {

      pregunta:
        "¿Para qué sirve el NSS?",

      respuesta:
        "Es el número que identifica a los trabajadores ante el IMSS.",

    },

  ],


  enlaces: [

    {

      titulo:
        "Portal oficial IMSS",

      url:
        "https://www.imss.gob.mx",

    },

  ],

};