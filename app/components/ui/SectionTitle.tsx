type SectionTitleProps = {
  title: string;
  description?: string;
};

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}