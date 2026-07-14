import type { Tramite } from "@/app/types";

import {
  TramiteGrid,
} from "@/app/components/features/tramites";


type Props = {
  tramites: Tramite[];
};


export default function PopularTramites({
  tramites,
}: Props) {

  return (

    <section className="mt-12">

      <h2 className="text-3xl font-bold">
        Trámites más buscados
      </h2>


      <TramiteGrid
        tramites={tramites}
      />

    </section>

  );
}