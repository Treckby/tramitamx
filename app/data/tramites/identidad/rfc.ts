import type { Tramite } from "@/app/types";


export const rfc: Tramite = {

  id: "rfc",

  slug: "rfc",

  titulo:
    "Registro Federal de Contribuyentes (RFC)",

  descripcion:
    "Información sobre requisitos, pasos y opciones para obtener tu RFC ante el SAT.",

  categoriaId:
    "identidad",

  costo:
    "Gratis",

  tiempoEstimado:
    "Variable según modalidad",

  modalidad:
    "En línea y presencial",

  requisitos: [

    "CURP",

    "Identificación oficial",

    "Correo electrónico",

  ],

  pasos: [

    "Ingresar al portal del SAT",

    "Solicitar inscripción al RFC",

    "Completar los datos requeridos",

    "Obtener la constancia correspondiente",

  ],

  preguntasFrecuentes: [

    {
      pregunta:
        "¿El RFC tiene costo?",

      respuesta:
        "El trámite de inscripción al RFC es gratuito."
    }

  ],

  enlaces: [

    {
      titulo:
        "Portal oficial del SAT",

      url:
        "https://www.sat.gob.mx"
    }

  ],

};