import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import {
  IconWeb,
  IconBackend,
  IconGame,
  IconCheck,
  IconArrow,
} from "./Icons";
import "../styles/Services.css";

const verticalIcons = [<IconWeb />, <IconBackend />, <IconGame />];
const verticalStacks = [
  ["React", "Next.js", "TypeScript", "Tailwind"],
  ["Node.js", "Python", "PostgreSQL", "REST"],
  ["Unity", "Godot", "C#", "Pixel Art"],
];

const ServicesPage = () => {
  const { t } = useLang();
  const s = t.services;

  return (
    <main className="services-page">
      <section className="services-hero fade-in">
        <div
          className="services-hero-pattern"
          style={{ backgroundImage: "url(/brand/pattern-2.png)" }}
        />
        <div className="container">
          <span className="eyebrow">{s.eyebrow}</span>
          <h1 className="services-hero-title">{s.heroTitle}</h1>
          <p className="services-hero-lead">{s.heroLead}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            {s.quoteBtn} <IconArrow width={18} height={18} />
          </Link>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className="verticals">
            {s.verticals.map((v, i) => (
              <div
                className={`vertical ${i % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
                key={i}
              >
                <div className="vertical-head">
                  <div className="service-icon">{verticalIcons[i]}</div>
                  <div>
                    <h2>{v.title}</h2>
                    <p className="vertical-tagline">{v.tagline}</p>
                  </div>
                </div>
                <ul className="check-list">
                  {v.includes.map((item) => (
                    <li key={item}>
                      <IconCheck /> {item}
                    </li>
                  ))}
                </ul>
                <div className="service-stack">
                  {verticalStacks[i].map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container fullstack-band">
          <h2 className="section-title">{s.fullstackTitle}</h2>
          <p className="section-lead">{s.fullstackLead}</p>
          <div style={{ textAlign: "center" }}>
            <Link to="/contact" className="btn btn-primary">
              {s.fullstackBtn} <IconArrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>{s.ctaTitle}</h2>
          <p>{s.ctaText}</p>
          <Link to="/contact" className="btn btn-cta btn-lg">
            {s.ctaBtn} <IconArrow width={18} height={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
