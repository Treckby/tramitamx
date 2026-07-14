import Link from "next/link";

const procedures = [
  "CURP",
  "RFC",
  "Pasaporte",
  "Licencia de conducir",
  "Acta de nacimiento",
  "NSS",
  "Infonavit",
  "SAT",
];

export default function PopularProcedures() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">
            Trámites más buscados
          </h2>

          <p className="mt-3 text-gray-600">
            Accede rápidamente a los trámites más consultados por los usuarios.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {procedures.map((procedure) => (
            <Link
              key={procedure}
              href="/"
              className="rounded-full border border-gray-200 bg-white px-5 py-3 font-medium transition hover:border-blue-600 hover:text-blue-600"
            >
              {procedure}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}