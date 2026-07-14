"use client";

import { Search } from "lucide-react";
import Input from "../ui/Input";
import { cn } from "@/app/lib/utils/cn";

type SearchBarProps = {
  placeholder?: string;
  className?: string;
};

export default function GlobalSearch({
  placeholder = "Buscar un trámite...",
  className,
}: SearchBarProps) {
  return (
    <div
      className={cn(
  "flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm",
  className
)}
    >
      <Search
        size={20}
        className="text-gray-400"
      />

      <Input
        placeholder={placeholder}
        className="border-0 p-0 shadow-none ring-0 focus:ring-0 focus:border-0"
      />
    </div>
  );
}