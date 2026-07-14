type PageActionsProps = {
  children: React.ReactNode;
};

export default function PageActions({
  children,
}: PageActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {children}
    </div>
  );
}