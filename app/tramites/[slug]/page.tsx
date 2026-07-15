import { notFound } from "next/navigation";


import {
  getTramiteBySlug,
  getRelatedTramites,
} from "@/app/services/tramites";


import {
  TramiteDetail,
} from "@/app/components/features/tramites";



type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};



export async function generateMetadata({
  params,
}: PageProps) {

  const { slug } = await params;


  const tramite =
    getTramiteBySlug(slug);


  if (!tramite) {

    return {
      title: "Trámite no encontrado",
    };

  }


  return {

    title:
      `${tramite.titulo} | TramitaMX`,


    description:
      tramite.descripcion,

  };

}



export default async function TramitePage({
  params,
}: PageProps) {


  const { slug } = await params;


  const tramite =
    getTramiteBySlug(slug);



  if (!tramite) {

    notFound();

  }



  const relacionados =
    getRelatedTramites(tramite);



  return (

    <TramiteDetail

      tramite={tramite}

      relacionados={relacionados}

    />

  );

}