import type { Tramite } from "@/app/types";

type Props = {
  tramite: Tramite;
};

export default function TramiteSteps({
  tramite,
}: Props) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">
        Pasos para realizar el trámite
      </h2>

      <ol className="mt-6 space-y-4">
        {tramite.pasos.map((paso, index) => (
          <li
            key={paso}
            className="flex gap-4"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
              {index + 1}
            </span>

            <p className="pt-1">
              {paso}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}