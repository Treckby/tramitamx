import { notFound } from "next/navigation";

import { getTramiteBySlug } from "@/app/services/tramite";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TramitePage({ params }: PageProps) {
  const { slug } = await params;

  const tramite = getTramiteBySlug(slug);

  if (!tramite) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold">{tramite.titulo}</h1>

      <p className="mt-4 text-lg text-gray-600">
        {tramite.descripcion}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Costo</p>

          <p className="mt-2 font-semibold">
            {tramite.costo}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">
            Tiempo estimado
          </p>

          <p className="mt-2 font-semibold">
            {tramite.tiempoEstimado}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">
            Modalidad
          </p>

          <p className="mt-2 font-semibold">
            {tramite.modalidad}
          </p>
        </div>
      </div>
    </main>
  );
}