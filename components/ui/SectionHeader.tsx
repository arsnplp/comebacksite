import { StampCheck } from "@/components/ui/Stamps";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  /** Portion du titre à surligner en ambre (doit être une sous-chaîne exacte du titre) */
  highlight?: string;
  lead?: string;
  align?: "center" | "left";
};

/** En-tête de section : eyebrow tamponné + H2 display + chapeau. */
export function SectionHeader({ eyebrow, title, highlight, lead, align = "center" }: SectionHeaderProps) {
  const alignCls = align === "center" ? "text-center" : "text-left";
  const leadAlign = align === "center" ? "mx-auto" : "";

  let titleContent: React.ReactNode = title;
  if (highlight && title.includes(highlight)) {
    const [before, after] = title.split(highlight);
    titleContent = (
      <>
        {before}
        <span className="hl-gold">{highlight}</span>
        {after}
      </>
    );
  }

  return (
    <div className={`${alignCls} mb-12 sm:mb-16`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <StampCheck className="h-5 w-5" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {titleContent}
      </h2>
      {lead && <p className={`mt-5 max-w-2xl text-lg text-ink-soft text-pretty ${leadAlign}`}>{lead}</p>}
    </div>
  );
}
