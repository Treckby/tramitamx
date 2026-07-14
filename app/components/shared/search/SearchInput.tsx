"use client";

import { useState } from "react";

type Props = {
  onSearch: (value: string) => void;
};


export default function SearchInput({
  onSearch,
}: Props) {

  const [value, setValue] = useState("");


  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const text = event.target.value;

    setValue(text);

    onSearch(text);
  }


  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder="Buscar trámite..."
      className="
        w-full
        rounded-xl
        border
        px-5
        py-3
        outline-none
      "
    />
  );
}