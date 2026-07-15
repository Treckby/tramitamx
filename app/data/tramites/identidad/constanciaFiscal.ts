import type { Tramite } from "@/app/types";


export const constanciaFiscal: Tramite = {

  id: "constancia-fiscal",

  slug: "constancia-situacion-fiscal",

  titulo:
    "Constancia de Situación Fiscal",

  descripcion:
    "Documento emitido por el SAT que contiene los datos fiscales de una persona registrada.",


  categoriaId:
    "identidad",


  costo:
    "Gratis",


  tiempoEstimado:
    "Inmediato",


  modalidad:
    "En línea",


  requisitos: [

    "RFC",

    "Contraseña del SAT o e.firma",

  ],


  pasos: [

    "Ingresar al portal oficial del SAT",

    "Acceder con RFC y contraseña o e.firma",

    "Descargar la Constancia de Situación Fiscal",

  ],


  preguntasFrecuentes: [

    {

      pregunta:
        "¿Tiene costo la Constancia de Situación Fiscal?",

      respuesta:
        "No, el trámite es gratuito.",

    },


    {

      pregunta:
        "¿Puedo obtenerla en línea?",

      respuesta:
        "Sí, puede descargarse desde el portal del SAT.",

    },

  ],


  enlaces: [

    {

      titulo:
        "Portal oficial SAT",

      url:
        "https://www.sat.gob.mx",

    },

  ],

};