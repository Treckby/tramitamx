import {
  HeroSearch,
  PopularTramites,
  CategoryList,
} from "@/app/components/features/home";


import {
  getTramites,
} from "@/app/services/tramites";


import {
  getCategorias,
} from "@/app/services/categorias";



export default function HomePage() {


  const tramites = getTramites();

  const categorias = getCategorias();



  return (

    <main className="mx-auto max-w-6xl px-6">
<HeroSearch
  tramites={tramites}
/>


      <PopularTramites
        tramites={tramites}
      />


      <CategoryList
        categorias={categorias}
      />

    </main>

  );

}