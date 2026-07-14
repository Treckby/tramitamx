"use client";

import { useState } from "react";

import {
  SearchInput,
} from "@/app/components/shared/search";


import {
  searchTramites,
} from "@/app/services/tramites";


import {
  TramiteGrid,
} from "./";


import type { Tramite } from "@/app/types";


type Props = {
  tramites: Tramite[];
};


export default function TramiteSearch({
  tramites,
}: Props) {


  const [results, setResults] =
    useState(tramites);


  function handleSearch(
    value: string
  ) {

    setResults(
      searchTramites(value)
    );

  }


  return (
    <>
      <SearchInput
        onSearch={handleSearch}
      />

      <TramiteGrid
        tramites={results}
      />
    </>
  );
}