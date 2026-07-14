import type { Tramite } from "@/app/types";

type Props = {
  tramite: Tramite;
};

export default function TramiteOfficialLinks({
  tramite,
}: Props) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">
        Enlaces oficiales
      </h2>

      <div className="mt-6 space-y-3">
        {tramite.enlaces.map((enlace) => (
          <a
            key={enlace.url}
            href={enlace.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border p-4 hover:bg-gray-50"
          >
            {enlace.titulo}
          </a>
        ))}
      </div>
    </section>
  );
}