import type { Tramite } from "@/app/types";


type Props = {
  tramite: Tramite;
};


export default function TramiteSteps({
  tramite,
}: Props) {


  return (

    <section className="mt-10">

      <h2 className="text-2xl font-bold">
        Pasos para realizar el trámite
      </h2>


      <ol className="mt-5 space-y-4">

        {tramite.pasos.map((paso,index)=> (

          <li
            key={paso}
            className="rounded-lg border p-4"
          >

            <strong>
              {index + 1}.
            </strong>

            {" "}

            {paso}

          </li>

        ))}

      </ol>

    </section>

  );

}