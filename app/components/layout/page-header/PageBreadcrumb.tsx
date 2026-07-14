type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function PageBreadcrumb({
  items,
}: Props) {
  return (
    <nav className="mb-6 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">

        {items.map((item, index) => (
          <li
            key={item.label}
            className="flex items-center gap-2"
          >

            {item.href ? (
              <a
                href={item.href}
                className="hover:text-black"
              >
                {item.label}
              </a>
            ) : (
              <span className="font-medium text-gray-900">
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span>
                /
              </span>
            )}

          </li>
        ))}

      </ol>
    </nav>
  );
}