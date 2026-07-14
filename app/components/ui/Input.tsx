import { cn } from "@/app/lib/utils/cn";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
        className
      )}
    />
  );
}