import Link from "next/link";

import type { Categoria } from "@/app/types";


type Props = {
  categorias: Categoria[];
};


export default function CategoryList({
  categorias,
}: Props) {

  return (

    <section className="mt-16">

      <h2 className="text-3xl font-bold">
        Categorías de trámites
      </h2>


      <div className="mt-8 grid gap-5 md:grid-cols-3">

        {categorias.map((categoria)=> (

          <Link
            key={categoria.id}
            href={`/categorias/${categoria.slug}`}
            className="rounded-xl border p-6 hover:shadow-md"
          >

            <h3 className="text-xl font-bold">
              {categoria.nombre}
            </h3>


            <p className="mt-3 text-gray-600">
              {categoria.descripcion}
            </p>

          </Link>

        ))}

      </div>

    </section>

  );
}