import type { Tramite } from "@/app/types";


type Props = {
  tramite: Tramite;
};


export default function TramiteOfficialLinks({
  tramite,
}: Props) {


  return (

    <section className="mt-10">

      <h2 className="text-2xl font-bold">
        Enlaces oficiales
      </h2>


      <div className="mt-5">

        {tramite.enlaces.map((link)=> (

          <a
            key={link.url}
            href={link.url}
            target="_blank"
            className="
              inline-block
              rounded-lg
              bg-black
              px-5
              py-3
              text-white
            "
          >

            {link.titulo}

          </a>

        ))}

      </div>


    </section>

  );

}