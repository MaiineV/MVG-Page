import { useParams, Link } from "react-router-dom";


const gameData = {
  sawi: {
    name: "Sawi, The Void Buster",
    description: "2D Platformer while being a Frog Alien having a Work Crisis! Explore unique, different worlds, using your gadgets to completed in your own way!",
    image: "/SawiBanner.png",
    pptLink: "https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM",
    downloadLink: "https://drive.google.com/file/d/1v0hqZ6NPxpdVztyQytf2slC2t1Dv3q74/view?usp=drive_link"
  },
  darkEconomy: {
    name: "Dark Economy",
    description: "Dark Economy is an Strategy, Economy and Rogue Lite Game. In it, you must buy buildings and businesses to grow rich and decide what matters more: the money or the people.",
    image: "/DarkEconomyBanner.png",
    pptLink: "https://docs.google.com/presentation/d/1XXqQPvyn6GMaXDGMQYccbaHjvoje-k15gjqeMc1TlXk/edit?usp=sharing",
  },
  factoryQuota: {
    name: "Factory Quota",
    description: "Top-Down Isometric Automatization Factory Game! Play as a worker at Factory Quota, optimizing production and managing resources to meet your daily minimum quota.",
    image: "/FactoryQuota.png",
    pptLink: "https://docs.google.com/presentation/d/1Kw_kv4OukY8765i0Fs3-rkqHAh_I8K7QY3wvbOw0VOg/edit?usp=sharing",
  },
  timeTravelerCivilization: {
    name: "Time Traveler Civilization",
    description: "Top-Down Isometric RTS Roguelite Game! You are an ancient civilization with almost no technology, but one day you are invaded by a futuristic civilization and must evolve to survive.",
    image: "/TimeTravelerCivilization.png",
    pptLink: "https://docs.google.com/presentation/d/1Of0ANNi2rnRfE50fbaN9jsOAAoDyZ9TMjF7bEJcZOTM/edit?usp=sharing",
  },
  // Puedes agregar más juegos aquí
};

const GameDetails = () => {
  const { id } = useParams();
  const game = gameData[id];

  const showSpecialButton = id === 'sawi';


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
        {showSpecialButton && (<a href={game.downloadLink} target="_blank" rel="noopener noreferrer" className="download-button">
          Download the Demo
        </a>)}
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </section>
  );
};

export default GameDetails;
