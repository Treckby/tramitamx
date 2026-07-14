import { GlobalSearch } from "@/app/components/shared";

import {
  Badge,
  Button,
  Container,
  Section,
} from "@/app/components/ui";

export default function Hero() {
  return (
    <Section className="bg-white">
      <Container className="flex flex-col items-center text-center">
        <Badge>
          Tu guía para realizar trámites en México
        </Badge>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Encuentra toda la información que necesitas para realizar tus trámites.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Consulta requisitos, costos, documentos, pasos y respuestas a las
          preguntas más frecuentes.
        </p>

        <div className="mt-10 w-full max-w-2xl">
          <GlobalSearch />
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/tramites">
            Explorar trámites
          </Button>

          <Button
            href="/categorias"
            variant="outline"
          >
            Ver categorías
          </Button>
        </div>
      </Container>
    </Section>
  );
}