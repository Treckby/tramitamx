import {
  TramiteSearchBox,
} from "@/app/components/features/tramites";

import type { Tramite } from "@/app/types";


type Props = {
  tramites: Tramite[];
};


export default function HeroSearch({
  tramites,
}: Props) {


  return (

    <section className="py-16 text-center">


      <h1 className="text-5xl font-bold">
        Encuentra trámites de México fácilmente
      </h1>


      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
        Requisitos, pasos y enlaces oficiales
        para realizar tus trámites.
      </p>


      <div className="mt-8">

        <TramiteSearchBox
          tramites={tramites}
        />

      </div>


    </section>

  );

}