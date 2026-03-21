export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-title section-${align}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
