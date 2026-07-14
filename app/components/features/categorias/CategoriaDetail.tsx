import type { Categoria, Tramite } from "@/app/types";

import {
  TramiteGrid,
} from "@/app/components/features/tramites";


type Props = {
  categoria: Categoria;
  tramites: Tramite[];
};


export default function CategoriaDetail({
  categoria,
  tramites,
}: Props) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      <h1 className="text-4xl font-bold">
        {categoria.nombre}
      </h1>


      <p className="mt-4 max-w-3xl text-lg text-gray-600">
        {categoria.descripcion}
      </p>


      <section className="mt-12">

        <h2 className="text-2xl font-bold">
          Trámites relacionados
        </h2>


        <TramiteGrid
          tramites={tramites}
        />

      </section>


    </main>
  );
}