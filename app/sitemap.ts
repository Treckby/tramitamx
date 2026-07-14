import type { MetadataRoute } from "next";


import {
  getTramites,
} from "@/app/services/tramites";


import {
  getCategorias,
} from "@/app/services/categorias";



export default function sitemap(): MetadataRoute.Sitemap {


  const baseUrl =
    "https://tudominio.com";



  const tramites =
    getTramites()
      .map((tramite)=>({

        url:
          `${baseUrl}/tramites/${tramite.slug}`,

        lastModified:
          new Date(),

      }));



  const categorias =
    getCategorias()
      .map((categoria)=>({

        url:
          `${baseUrl}/categorias/${categoria.slug}`,

        lastModified:
          new Date(),

      }));



  return [

    {
      url: baseUrl,
      lastModified: new Date(),
    },


    {
      url:
        `${baseUrl}/tramites`,

      lastModified:
        new Date(),
    },
    {
 url:
 `${baseUrl}/tramites-mas-buscados`,

 lastModified:
 new Date(),
},


    ...tramites,


    ...categorias,

  ];

}