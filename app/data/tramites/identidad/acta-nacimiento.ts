import type { Tramite } from "@/app/types";


export const actaNacimiento: Tramite = {

  id: "acta-nacimiento",

  slug: "acta-nacimiento",

  titulo:
    "Acta de nacimiento certificada",

  descripcion:
    "Consulta los requisitos, pasos y opciones disponibles para obtener una copia certificada de tu acta de nacimiento en México.",

  categoriaId:
    "identidad",

  costo:
    "Depende del estado donde se solicite",

  tiempoEstimado:
    "Inmediato en línea o según disponibilidad",

  modalidad:
    "En línea y presencial",

  requisitos: [

    "CURP",

    "Datos personales del registro",

    "Entidad federativa de nacimiento",

  ],

  pasos: [

    "Ingresar al portal oficial correspondiente",

    "Capturar los datos solicitados",

    "Realizar el pago si aplica",

    "Descargar o recibir el documento",

  ],

  preguntasFrecuentes: [

    {
      pregunta:
        "¿El acta de nacimiento en línea tiene validez oficial?",

      respuesta:
        "Sí, las copias certificadas digitales cuentan con mecanismos de validación oficial."
    },

    {
      pregunta:
        "¿Puedo obtener el acta de otra persona?",

      respuesta:
        "Depende de la información disponible y las reglas establecidas por la autoridad correspondiente."
    }

  ],

  enlaces: [

    {
      titulo:
        "Portal oficial para actas de nacimiento",

      url:
        "https://www.gob.mx/ActaNacimiento"
    }

  ],

};