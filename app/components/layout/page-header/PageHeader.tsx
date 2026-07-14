import {
  Container,
  Section,
} from "@/app/components/ui";

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHeader({
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <Section className="border-b bg-gray-50">
      <Container>
        <div className="space-y-4">

          {children}

          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              {title}
            </h1>

            {description && (
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                {description}
              </p>
            )}
          </div>

        </div>
      </Container>
    </Section>
  );
}