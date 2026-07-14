import type { Tramite } from "@/app/types";

type Props = {
  tramite: Tramite;
};

export default function TramiteHero({
  tramite,
}: Props) {
  return (
    <section>
      <h1 className="text-4xl font-bold">
        {tramite.titulo}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {tramite.descripcion}
      </p>
    </section>
  );
}