import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TramiteDetail } from "@/app/components/features/tramites";
import { getTramiteBySlug } from "@/app/services/tramites";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  const { slug } = await params;

  const tramite = getTramiteBySlug(slug);


  if (!tramite) {
    return {
      title: "Trámite no encontrado",
    };
  }


  return {
    title: `${tramite.titulo} | TramitaMX`,

    description: tramite.descripcion,

    openGraph: {
      title: `${tramite.titulo} | TramitaMX`,

      description: tramite.descripcion,

      type: "article",
    },
  };
}


export default async function TramitePage({
  params,
}: PageProps) {

  const { slug } = await params;


  const tramite = getTramiteBySlug(slug);


  if (!tramite) {
    notFound();
  }


  return (
    <TramiteDetail tramite={tramite} />
  );
}