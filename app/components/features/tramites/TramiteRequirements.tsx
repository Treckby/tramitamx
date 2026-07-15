import type { Tramite } from "@/app/types";


type Props = {
  tramite: Tramite;
};


export default function TramiteRequirements({
  tramite,
}: Props) {

  return (

    <section className="mt-10">

      <h2 className="text-2xl font-bold">
        Requisitos
      </h2>


      <ul className="mt-5 space-y-3">

        {tramite.requisitos.map((item)=> (

          <li
            key={item}
            className="rounded-lg border p-3"
          >
            ✓ {item}
          </li>

        ))}

      </ul>

    </section>

  );
}