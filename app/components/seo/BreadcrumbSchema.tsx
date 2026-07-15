type Props = {
  titulo: string;
  slug: string;
};


export default function BreadcrumbSchema({
  titulo,
  slug,
}: Props) {


  const schema = {

    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement: [

      {
        "@type":
          "ListItem",

        position:
          1,

        name:
          "Inicio",

        item:
          "/",

      },


      {
        "@type":
          "ListItem",

        position:
          2,

        name:
          "Trámites",

        item:
          "/tramites",

      },


      {
        "@type":
          "ListItem",

        position:
          3,

        name:
          titulo,

        item:
          `/tramites/${slug}`,

      },

    ],

  };


  return (

    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(schema),
      }}

    />

  );

}