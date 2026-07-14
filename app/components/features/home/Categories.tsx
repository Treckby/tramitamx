import Link from "next/link";
import {
  Car,
  FileText,
  HeartPulse,
  Home,
  Landmark,
  Plane,
  GraduationCap,
  Briefcase,
} from "lucide-react";

import {
  Card,
  Container,
  Section,
  SectionTitle,
} from "@/app/components/ui";

const categories = [
  {
    title: "Documentos",
    icon: FileText,
    href: "/categorias/documentos",
  },
  {
    title: "Vehículos",
    icon: Car,
    href: "/categorias/vehiculos",
  },
  {
    title: "Impuestos",
    icon: Landmark,
    href: "/categorias/impuestos",
  },
  {
    title: "Salud",
    icon: HeartPulse,
    href: "/categorias/salud",
  },
  {
    title: "Vivienda",
    icon: Home,
    href: "/categorias/vivienda",
  },
  {
    title: "Educación",
    icon: GraduationCap,
    href: "/categorias/educacion",
  },
  {
    title: "Viajes",
    icon: Plane,
    href: "/categorias/viajes",
  },
  {
    title: "Trabajo",
    icon: Briefcase,
    href: "/categorias/trabajo",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">
          Explora por categoría
        </h2>

        <p className="mt-3 text-gray-600">
          Encuentra rápidamente el trámite que necesitas.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.title}
              href={category.href}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon
                size={34}
                className="mb-4 text-blue-600"
              />

              <h3 className="text-lg font-semibold">
                {category.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}