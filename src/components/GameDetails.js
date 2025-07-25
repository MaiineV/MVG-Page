import { useParams, Link } from "react-router-dom";


const gameData = {
  sawi: {
    name: "Sawi, The Void Buster",
    description: "2D Platformer while being a Frog Alien having a Work Crisis! Explore unique, different worlds, using your gadgets to completed in your own way!",
    image: "/SawiBanner.png",
    downloadLink: "https://drive.google.com/drive/folders/1qLpubZjmdf7CZxrNSlPjl6QM-GOvC9zl?dmr=1&ec=wgc-drive-globalnav-goto"
  },
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
        {showSpecialButton && (<a href={game.downloadLink} target="_blank" rel="noopener noreferrer" className="download-button">
          Check the Demo & Trailer!
        </a>)}
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    </section>
  );
};

export default GameDetails;
