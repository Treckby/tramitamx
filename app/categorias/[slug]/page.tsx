import { notFound } from "next/navigation";


import {
  CategoriaDetail,
} from "@/app/components/features/categorias";


import {
  getCategoriaBySlug,
} from "@/app/services/categorias";


import {
  getTramites,
} from "@/app/services/tramites";



type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};



export async function generateMetadata({
  params,
}: PageProps) {

  const { slug } = await params;


  const categoria =
    getCategoriaBySlug(slug);


  if (!categoria) {
    return {
      title: "Categoría no encontrada",
    };
  }


  return {
    title:
      `${categoria.nombre} | TramitaMX`,

    description:
      categoria.descripcion,
  };

}



export default async function CategoriaPage({
  params,
}: PageProps) {


  const { slug } = await params;


  const categoria =
    getCategoriaBySlug(slug);


  if (!categoria) {
    notFound();
  }


  const tramites =
    getTramites().filter(
      (tramite) =>
        tramite.categoriaId === categoria.id
    );


  return (
    <CategoriaDetail
      categoria={categoria}
      tramites={tramites}
    />
  );

}