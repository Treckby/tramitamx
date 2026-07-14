import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          TramitaMX
        </Link>

        {/* Buscador */}
        <div className="hidden w-full max-w-md items-center rounded-lg border border-gray-300 px-3 py-2 md:flex">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Buscar un trámite..."
            className="ml-2 w-full outline-none"
          />
        </div>

        {/* Navegación */}
        <nav className="hidden gap-8 md:flex">
          <Link href="/">Inicio</Link>

          <Link href="/tramites">
            Trámites
          </Link>

          <Link href="/estados">
            Estados
          </Link>

          <Link href="/categorias">
            Categorías
          </Link>
        </nav>
      </div>
    </header>
  );
}