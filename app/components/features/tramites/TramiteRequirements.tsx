import type { Tramite } from "@/app/types";

type Props = {
  tramite: Tramite;
};

export default function TramiteRequirements({
  tramite,
}: Props) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">
        Requisitos
      </h2>

      <ul className="mt-6 space-y-3">
        {tramite.requisitos.map((requisito) => (
          <li
            key={requisito}
            className="flex items-start gap-3 rounded-lg border p-4"
          >
            <span className="mt-1">
              ✓
            </span>

            <span>
              {requisito}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}