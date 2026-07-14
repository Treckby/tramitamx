import { cn } from "@/app/lib/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        className
      )}
    >
      {children}
    </section>
  );
}