import {
  Hero,
  Categories,
  PopularProcedures,
} from "@/app/components/features/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularProcedures />
    </>
  );
}