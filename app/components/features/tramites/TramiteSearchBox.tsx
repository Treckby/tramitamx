"use client";

import { useState } from "react";

import Link from "next/link";

import type { Tramite } from "@/app/types";

import {
  searchTramites,
} from "@/app/services/tramites";


type Props = {
  tramites: Tramite[];
};


export default function TramiteSearchBox({
  tramites,
}: Props) {


  const [query, setQuery] = useState("");


  const results =
    searchTramites(query)
      .slice(0, 5);



  return (
    <div className="relative mx-auto max-w-2xl">


      <input

        value={query}

        onChange={(e)=>
          setQuery(e.target.value)
        }

        placeholder="Busca CURP, RFC, pasaporte..."

        className="
          w-full
          rounded-xl
          border
          px-5
          py-4
          text-lg
        "

      />


      {query && (

        <div
          className="
            absolute
            left-0
            right-0
            mt-2
            rounded-xl
            border
            bg-white
            shadow-lg
          "
        >

          {results.length > 0 ? (

            results.map((tramite)=> (

              <Link

                key={tramite.id}

                href={`/tramites/${tramite.slug}`}

                className="
                  block
                  p-4
                  hover:bg-gray-100
                "

              >

                {tramite.titulo}

              </Link>

            ))

          ) : (

            <p className="p-4 text-gray-500">
              No encontramos trámites
            </p>

          )}

        </div>

      )}

    </div>
  );
}