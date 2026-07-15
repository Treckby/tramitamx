import Link from "next/link";

import type { Tramite } from "@/app/types";


type Props = {
  tramites: Tramite[];
};


export default function RelatedTramites({
  tramites,
}: Props) {


  return (

    <section className="mt-12">


      <h2 className="text-2xl font-bold">
        También puedes consultar
      </h2>


      <div className="mt-5 grid gap-5 md:grid-cols-3">


        {tramites.map((tramite)=>(

          <Link

            key={tramite.id}

            href={`/tramites/${tramite.slug}`}

            className="
              rounded-xl
              border
              p-5
              hover:shadow-md
            "

          >

            <h3 className="font-bold">
              {tramite.titulo}
            </h3>


            <p className="mt-2 text-sm text-gray-600">
              {tramite.descripcion}
            </p>


          </Link>

        ))}


      </div>


    </section>

  );

}