import { useParams, Link } from "react-router-dom";

const gameData = {
  sawi: {
    name: "Sawi, The Void Buster",
    description: "2D Platformer while being a Frog Alien having a Work Crisis! Explore unique, different worlds, using your gadgets to completed in your own way!",
    image: "/SawiBanner.png",
    pptLink: "https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM"
  },
  // Puedes agregar más juegos aquí
};

const GameDetails = () => {
  const { id } = useParams();
  const game = gameData[id];

  if (!game) return <div className="game-details"><h2>Game not found</h2></div>;

  return (
    <section className="game-details">
      <div className="details-container">
        <h1>{game.name}</h1>
        <img src={game.image} alt={game.name} className="details-image" />
        <p className="details-description">{game.description}</p>
        <a href={game.pptLink} target="_blank" rel="noopener noreferrer" className="download-button">
          View Pitch Deck
        </a>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </section>
  );
};

export default GameDetails;
