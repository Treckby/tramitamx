import type { Tramite } from "@/app/types";

type Props = {
  tramite: Tramite;
};

export default function TramiteCard({
  tramite,
}: Props) {
  return (
    <a
      href={`/tramites/${tramite.slug}`}
      className="block rounded-xl border p-6 transition hover:shadow-md"
    >

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {tramite.categoria}
        </span>
      </div>


      <h2 className="mt-3 text-xl font-bold">
        {tramite.titulo}
      </h2>


      <p className="mt-3 text-gray-600">
        {tramite.descripcion}
      </p>


      <div className="mt-5 text-sm font-medium">
        Ver trámite →
      </div>

    </a>
  );
}