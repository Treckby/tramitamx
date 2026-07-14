import { getTramites } from "@/app/services/tramites";
import { TramiteGrid } from "@/app/components/features/tramites";

export const metadata = {
  title: "Trámites en México",
  description:
    "Encuentra requisitos, pasos y enlaces oficiales para realizar trámites en México.",
};


export default function TramitesPage() {

  const tramites = getTramites();


  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      <h1 className="text-4xl font-bold">
        Trámites en México
      </h1>


      <p className="mt-4 text-lg text-gray-600">
        Encuentra información sobre requisitos,
        costos y pasos para realizar tus trámites.
      </p>


      <div className="mt-10 grid gap-6 md:grid-cols-3">

<TramiteGrid tramites={tramites}/>

      </div>

    </main>
  );
}