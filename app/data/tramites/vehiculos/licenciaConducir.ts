import type { Tramite } from "@/app/types";


export const licenciaConducir: Tramite = {

  id: "licencia-conducir",

  slug:
    "licencia-de-conducir",


  titulo:
    "Licencia de conducir",


  descripcion:
    "Consulta los requisitos y pasos para obtener una licencia de conducir.",


  categoriaId:
    "vehiculos",


  costo:
    "Depende del estado",


  tiempoEstimado:
    "Variable",


  modalidad:
    "Presencial y en línea",


  requisitos: [

    "Identificación oficial",

    "Comprobante de domicilio",

    "CURP",

  ],


  pasos: [

    "Consultar requisitos del estado correspondiente",

    "Realizar pago de derechos",

    "Presentar examen o evaluación si aplica",

    "Recibir licencia",

  ],


  preguntasFrecuentes: [

    {

      pregunta:
        "¿La licencia tiene vigencia?",

      respuesta:
        "Sí, la vigencia depende del estado donde se tramite.",

    },

  ],


  enlaces: [

    {

      titulo:
        "Consultar portal estatal",

      url:
        "https://www.gob.mx",

    },

  ],

};