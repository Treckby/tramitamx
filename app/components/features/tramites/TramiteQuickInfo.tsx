import type { Tramite } from "@/app/types";

type Props = {
  tramite: Tramite;
};

export default function TramiteQuickInfo({
  tramite,
}: Props) {
  const items = [
    {
      label: "Costo",
      value: tramite.costo,
    },
    {
      label: "Tiempo estimado",
      value: tramite.tiempoEstimado,
    },
    {
      label: "Modalidad",
      value: tramite.modalidad,
    },
  ];

  return (
    <section className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border p-4"
        >
          <p className="text-sm text-gray-500">
            {item.label}
          </p>

          <p className="mt-2 font-semibold">
            {item.value}
          </p>
        </div>
      ))}
    </section>
  );
}