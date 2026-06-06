import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { IconRocket, IconBolt, IconChat, IconShield, IconArrow } from "./Icons";
import "../styles/About.css";

const valueIcons = [
  <IconRocket width={26} height={26} />,
  <IconBolt width={26} height={26} />,
  <IconChat width={26} height={26} />,
  <IconShield width={26} height={26} />,
];

const AboutPage = () => {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="about-page">
      <section className="about-hero fade-in">
        <div className="container">
          <div className="about-hero-content">
            <h1>{a.heroTitle}</h1>
            <p>{a.heroSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-section">
            <div className="story-section">
              <div className="story-text slide-in-left">
                <h2>{a.storyTitle}</h2>
                {a.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="story-image slide-in-right">
                <img
                  className="company-image"
                  src="/brand/logo-principal-1color.svg"
                  alt="MVG Games"
                />
              </div>
            </div>

            <div className="values-section">
              <h2 className="section-title">{a.valuesTitle}</h2>
              <div className="values-grid">
                {a.values.map((v, i) => (
                  <div className="value-card fade-in" key={i}>
                    <div className="value-icon">{valueIcons[i]}</div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="founder-note">
              <h2 className="section-title">{a.founderTitle}</h2>
              <p>{a.founderText}</p>
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Link to="/contact" className="btn btn-primary">
                  {a.founderBtn} <IconArrow width={18} height={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
