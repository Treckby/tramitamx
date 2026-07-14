import type { Tramite } from "@/app/types";


import {
  TramiteGrid,
} from "@/app/components/features/tramites";


type Props = {
  tramites: Tramite[];
};


export default function PopularTramitesPage({
  tramites,
}: Props) {

  return (

    <main className="mx-auto max-w-6xl px-6 py-10">


      <h1 className="text-4xl font-bold">
        Trámites más buscados en México
      </h1>


      <p className="mt-5 max-w-3xl text-lg text-gray-600">

        Encuentra información sobre los trámites
        más consultados, requisitos, pasos y
        enlaces oficiales.

      </p>


      <section className="mt-12">

        <h2 className="text-2xl font-bold">
          Trámites principales
        </h2>


        <TramiteGrid
          tramites={tramites}
        />

      </section>


    </main>

  );
}