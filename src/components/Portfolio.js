import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { IconArrow } from "./Icons";
import "../styles/Portfolio.css";

const gamesMeta = [
  {
    id: "sawi",
    name: "Sawi, The Void Buster",
    image: "/SawiBanner.png",
    categories: ["Platformer", "2D", "Pixel Art", "Indie"],
  },
  {
    id: "oneStepBehind",
    name: "One Step Behind",
    image: "/OneStepImage.png",
    categories: ["Incremental", "Bullet-hell", "Metroidvania", "Pixel Art"],
  },
];

const PortfolioPage = () => {
  const { t } = useLang();
  const p = t.portfolio;

  return (
    <div className="portfolio-page">
      <div className="container">
        <div className="portfolio-header fade-in">
          <span className="eyebrow">{p.eyebrow}</span>
          <h1 className="section-title">{p.title}</h1>
          <p className="portfolio-subtitle">{p.subtitle}</p>
        </div>

        <h2 className="section-title left" style={{ fontSize: "1.8rem", marginTop: "1rem" }}>
          {p.gamesTitle}
        </h2>
        <div className="games-grid">
          {gamesMeta.map((game, index) => (
            <Link
              key={game.id}
              to={`/game/${game.id}`}
              className={`game-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
            >
              <div className="game-status">{p.status}</div>
              <div className="game-image">
                <img src={game.image} alt={game.name} />
              </div>
              <div className="game-content">
                <h3 className="game-title">{game.name}</h3>
                <div className="game-categories">
                  {game.categories.map((category, catIndex) => (
                    <span key={catIndex} className="game-category">
                      {category}
                    </span>
                  ))}
                </div>
                <p className="game-description">{p.games[index].description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="work-cta">
          <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
            {p.softwareTitle}
          </h2>
          <p>{p.softwareText}</p>
          <Link to="/contact" className="btn btn-primary">
            {p.softwareBtn} <IconArrow width={18} height={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
