import {
  PopularTramitesPage,
} from "@/app/components/features/seo-pages";


import {
  getTramites,
} from "@/app/services/tramites";


export const metadata = {

  title:
    "Trámites más buscados en México",

  description:
    "Consulta los trámites más importantes de México con requisitos, pasos y enlaces oficiales.",

};



export default function Page(){

  const tramites =
    getTramites();


  return (

    <PopularTramitesPage
      tramites={tramites}
    />

  );

}