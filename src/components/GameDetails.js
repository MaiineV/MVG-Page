import { Link, useParams } from "react-router-dom";
import "../styles/GameDetails.css";

const GameDetailsPage = () => {
  const { id } = useParams();

  const gameData = {
    sawi: {
      name: "Sawi, The Void Buster",
      description:
        "2D Platformer while being a Frog Alien having a Work Crisis! Explore unique, different worlds, using your gadgets to complete them in your own way!",
      image: "/api/placeholder/600/400",
      trailer: "https://www.youtube.com/embed/E3xlxeCcDfs?si=yPrH9Ui1xIjqpe_F",
      downloadLink:
        "https://drive.google.com/drive/folders/1qLpubZjmdf7CZxrNSlPjl6QM-GOvC9zl?dmr=1&ec=wgc-drive-globalnav-goto",
      category: "2D Platformer",
      releaseDate: "2024",
      features: [
        "Unique frog alien protagonist",
        "Multiple worlds to explore",
        "Creative gadget-based gameplay",
        "Multiple completion paths",
        "Engaging storyline",
      ],
    },
  };

  const game = gameData[id];

  if (!game) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Lemonada, cursive",
              color: "var(--secondary-color)",
            }}
          >
            Game Not Found
          </h2>
          <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            The game you're looking for doesn't exist.
          </p>
          <Link to="/portfolio" className="btn">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="game-details-page">
      <section className="game-hero fade-in">
        <div className="container">
          <h1>{game.name}</h1>
          <div className="game-meta">
            <span className="meta-item">{game.category}</span>
          </div>
        </div>
      </section>

      <section className="game-content">
        <div className="container">
          <div className="content-inner">
            <div className="game-image-container slide-in-left">
              <div className="game-image">
                <iframe
                  width="560"
                  height="315"
                  src={game.trailer}
                  title="Game Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="game-info">
              <div className="game-description slide-in-left">
                <h3
                  style={{
                    fontFamily: "Lemonada, cursive",
                    color: "var(--secondary-color)",
                    marginBottom: "1rem",
                  }}
                >
                  About the Game
                </h3>
                <p>{game.description}</p>
              </div>

              <div className="game-features slide-in-right">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {game.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="actions fade-in">
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Check Demo →
              </a>
              <Link to="/portfolio" className="btn btn-large">
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameDetailsPage;
