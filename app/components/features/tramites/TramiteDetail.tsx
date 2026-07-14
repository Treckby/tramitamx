import type { Tramite } from "@/app/types";
import {
  PageBreadcrumb,
} from "@/app/components/layout";

import {
  TramiteHero,
  TramiteQuickInfo,
  TramiteRequirements,
  TramiteSteps,
  TramiteFAQ,
  TramiteOfficialLinks,
} from "./";

type Props = {
  tramite: Tramite;
};

export default function TramiteDetail({
  tramite,
}: Props) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
            <PageBreadcrumb
        items={[
          {
            label: "Inicio",
            href: "/",
          },
          {
            label: "Trámites",
            href: "/tramites",
          },
          {
            label: "Categoría",
          },
          {
            label: tramite.titulo,
          },
        ]}
      />

      <TramiteHero tramite={tramite} />

      <TramiteQuickInfo tramite={tramite} />

      <TramiteRequirements tramite={tramite} />

      <TramiteSteps tramite={tramite} />

      <TramiteFAQ tramite={tramite} />

      <TramiteOfficialLinks tramite={tramite} />

    </main>
  );
}