export function SectionHeading({
  title,
  accent,
  subtitle,
  right,
}: {
  title: string;
  accent?: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="font-serif text-2xl sm:text-3xl leading-tight">
          {title}{" "}
          {accent ? (
            <span className="font-serif italic text-brand">{accent}</span>
          ) : null}
        </h2>
        {subtitle ? <p className="mt-2 max-w-xl text-sm text-muted">{subtitle}</p> : null}
      </div>
      {right}
    </div>
  );
}
