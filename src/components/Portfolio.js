import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, videoId: 'video1', name: 'Game 1', downloadLink: '#' },
    { id: 2, videoId: 'video2', name: 'Game 2', downloadLink: '#' },
    { id: 3, videoId: 'video3', name: 'Game 3', downloadLink: '#' },
    { id: 4, videoId: 'video4', name: 'Game 4', downloadLink: '#' },
  ];

  return (
    <section id="portfolio" className="section portfolio">
      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}`}
              frameBorder="0"
              allowFullScreen
              title={item.name}
            ></iframe>
            <h3>{item.name}</h3>
            <a href={item.downloadLink} className="btn">Download</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
