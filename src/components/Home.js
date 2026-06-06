import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import {
  IconWeb,
  IconBackend,
  IconGame,
  IconRocket,
  IconShield,
  IconGlobe,
  IconChat,
  IconArrow,
} from "./Icons";
import "../styles/Home.css";

const serviceIcons = [<IconWeb />, <IconBackend />, <IconGame />];
const serviceStacks = [
  ["React", "Next.js", "TypeScript"],
  ["Node.js", "Python", "PostgreSQL"],
  ["Unity", "Godot", "Pixel Art"],
];
const whyIcons = [<IconRocket />, <IconChat />, <IconGlobe />, <IconShield />];
const stepNums = ["01", "02", "03", "04"];

const HomePage = () => {
  const { t } = useLang();
  const h = t.home;

  return (
    <main>
      {/* Hero */}
      <section className="hero fade-in">
        <div
          className="hero-pattern"
          style={{ backgroundImage: "url(/brand/pattern-2.png)" }}
        />
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">{h.heroEyebrow}</span>
            <h1>
              {h.heroTitle1}
              <br />
              {h.heroTitle2}
            </h1>
            <p>{h.heroSubtitle}</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                {h.heroCtaPrimary} <IconArrow width={18} height={18} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline btn-lg">
                {h.heroCtaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-surface">
        <div className="container">
          <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>
            {h.servicesEyebrow}
          </span>
          <h2 className="section-title">{h.servicesTitle}</h2>
          <p className="section-lead">{h.servicesLead}</p>
          <div className="services-grid">
            {h.services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{serviceIcons[i]}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-stack">
                  {serviceStacks[i].map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/services" className="btn btn-outline">
              {h.exploreAll} <IconArrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why MVG */}
      <section className="section section-soft">
        <div className="container">
          <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>
            {h.whyEyebrow}
          </span>
          <h2 className="section-title">{h.whyTitle}</h2>
          <p className="section-lead">{h.whyLead}</p>
          <div className="why-grid">
            {h.why.map((w, i) => (
              <div className="why-item" key={i}>
                <div className="why-ic">{whyIcons[i]}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-surface">
        <div className="container">
          <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>
            {h.processEyebrow}
          </span>
          <h2 className="section-title">{h.processTitle}</h2>
          <p className="section-lead">{h.processLead}</p>
          <div className="process-grid">
            {h.process.map((p, i) => (
              <div className="process-step" key={i}>
                <div className="step-num">{stepNums[i]}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>{h.ctaTitle}</h2>
          <p>{h.ctaText}</p>
          <Link to="/contact" className="btn btn-cta btn-lg">
            {h.ctaBtn} <IconArrow width={18} height={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
