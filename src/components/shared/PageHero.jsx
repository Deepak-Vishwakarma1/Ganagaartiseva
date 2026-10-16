import "./page-hero.css";

export default function PageHero({ title, description, className = "" }) {
  return (
    <header className={`page-hero ${className}`.trim()}>
      <p className="page-hero__eyebrow">Ganga Aarti Seva · Varanasi</p>
      <h1>{title}</h1>
      {description && <p className="page-hero__description">{description}</p>}
    </header>
  );
}
