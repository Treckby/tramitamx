import type { Tramite } from "@/app/types";


type Props = {
  tramite: Tramite;
};


export default function FAQSchema({
  tramite,
}: Props) {


  const schema = {

    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity:
      tramite.preguntasFrecuentes.map((faq)=>({

        "@type": "Question",

        name:
          faq.pregunta,


        acceptedAnswer: {

          "@type": "Answer",

          text:
            faq.respuesta,

        },

      })),


  };


  return (

    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(schema),
      }}

    />

  );

}