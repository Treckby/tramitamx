import type { Tramite } from "@/app/types";



type Props = {
  tramite: Tramite;
};


export default function TramiteFAQ({
  tramite,
}: Props) {


  return (

    <section className="mt-10">

      <h2 className="text-2xl font-bold">
        Preguntas frecuentes
      </h2>


      <div className="mt-5 space-y-4">

        {tramite.preguntasFrecuentes.map((faq)=> (

          <article
            key={faq.pregunta}
            className="rounded-lg border p-5"
          >

            <h3 className="font-bold">
              {faq.pregunta}
            </h3>


            <p className="mt-2 text-gray-600">
              {faq.respuesta}
            </p>


          </article>

        ))}

      </div>


    </section>

  );

}