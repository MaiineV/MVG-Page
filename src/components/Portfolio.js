import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

const PortfolioPage = () => {
  const games = [
    {
      id: 'sawi',
      name: 'Sawi, The Void Buster',
      description: '2D Platformer while being a Frog Alien having a Work Crisis!',
      image: 'SawiBanner.png',
      categories: ['Platformer', '2D', 'PixelArt', 'Indie'],
      status: 'Demo Available'
    },
    {
      id: 'oneStepBehind',
      name: 'One Step Behind',
      description: 'Incremental Bullethell with Metroidvania mechanics!',
      image: 'OneStepImage.png',
      categories: ['Incremental', 'Bullethell', 'Metroidvania', 'PixelArt'],
      status: 'Demo Available'
    },
  ];

  return (
    <>
      <div className="portfolio-page">
        <div className="container">
          <div className="portfolio-header fade-in">
            <h1 className="section-title">Our Portfolio</h1>
            <p className="portfolio-subtitle">
              Discover our collection of innovative games, each crafted with passion and attention to detail.
            </p>
          </div>

          <div className="games-grid">
            {games.map((game, index) => (
              <Link 
                key={game.id} 
                to={`/game/${game.id}`} 
                className={`game-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              >
                <div className="game-status">{game.status}</div>
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
                  <p className="game-description">{game.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;