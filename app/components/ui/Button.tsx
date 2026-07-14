import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl font-semibold transition-colors",

    {
      "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
      "bg-gray-100 hover:bg-gray-200": variant === "secondary",
      "border border-gray-300 hover:bg-gray-50": variant === "outline",

      "px-3 py-2 text-sm": size === "sm",
      "px-6 py-3": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },

    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}