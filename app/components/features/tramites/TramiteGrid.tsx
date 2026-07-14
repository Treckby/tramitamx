import type { Tramite } from "@/app/types";

import { TramiteCard } from "./";


type Props = {
  tramites: Tramite[];
};


export default function TramiteGrid({
  tramites,
}: Props) {

  return (
    <section className="mt-10 grid gap-6 md:grid-cols-3">

      {tramites.map((tramite) => (
        <TramiteCard
          key={tramite.id}
          tramite={tramite}
        />
      ))}

    </section>
  );
}