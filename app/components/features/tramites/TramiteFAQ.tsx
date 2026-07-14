import type { Tramite } from "@/app/types";

type Props = {
  tramite: Tramite;
};

export default function TramiteFAQ({
  tramite,
}: Props) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">
        Preguntas frecuentes
      </h2>

      <div className="mt-6 space-y-4">
        {tramite.preguntasFrecuentes.map((faq) => (
          <div
            key={faq.pregunta}
            className="rounded-xl border p-5"
          >
            <h3 className="font-semibold">
              {faq.pregunta}
            </h3>

            <p className="mt-2 text-gray-600">
              {faq.respuesta}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}