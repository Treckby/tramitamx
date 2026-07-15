import type { Tramite } from "@/app/types";


import {
  TramiteRequirements,
  TramiteSteps,
  TramiteFAQ,
  TramiteOfficialLinks,
  RelatedTramites,
} from "./";
import {
  FAQSchema,BreadcrumbSchema,
} from "@/app/components/seo";

type Props = {
  tramite: Tramite;
  relacionados: Tramite[];
};


export default function TramiteDetail({
  tramite,relacionados
}: Props) {


  return (
    <>
<FAQSchema
  tramite={tramite}
/>
<BreadcrumbSchema

  titulo={tramite.titulo}

  slug={tramite.slug}

/>
    <main className="mx-auto max-w-5xl px-6 py-10">


      <header>

        <h1 className="text-4xl font-bold">
          {tramite.titulo}
        </h1>


        <p className="mt-5 text-lg text-gray-600">
          {tramite.descripcion}
        </p>


      </header>



      <section className="mt-8 grid gap-5 md:grid-cols-3">


        <div className="rounded-xl border p-5">

          <span className="text-sm text-gray-500">
            Costo
          </span>

          <p className="mt-2 font-bold">
            {tramite.costo}
          </p>

        </div>



        <div className="rounded-xl border p-5">

          <span className="text-sm text-gray-500">
            Tiempo estimado
          </span>

          <p className="mt-2 font-bold">
            {tramite.tiempoEstimado}
          </p>

        </div>



        <div className="rounded-xl border p-5">

          <span className="text-sm text-gray-500">
            Modalidad
          </span>

          <p className="mt-2 font-bold">
            {tramite.modalidad}
          </p>

        </div>


      </section>




      <TramiteRequirements
        tramite={tramite}
      />



      <TramiteSteps
        tramite={tramite}
      />



      <TramiteFAQ
        tramite={tramite}
      />



      <TramiteOfficialLinks
        tramite={tramite}
      />
<RelatedTramites
  tramites={relacionados}
/>

    </main>
</>
  );

}