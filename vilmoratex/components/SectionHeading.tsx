type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold text-brand-plum sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-brand-charcoal/70">{description}</p>}
    </div>
  );
}
