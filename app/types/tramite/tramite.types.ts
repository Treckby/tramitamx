export interface Tramite {
  id: string;
  slug: string;

  titulo: string;
  descripcion: string;

  categoriaId: string;

  costo: string;

  tiempoEstimado: string;

  modalidad: string;

  requisitos: string[];

  pasos: string[];

  preguntasFrecuentes: {
    pregunta: string;
    respuesta: string;
  }[];

  enlaces: {
    titulo: string;
    url: string;
  }[];
}