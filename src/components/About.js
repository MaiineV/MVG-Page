import "../styles/About.css";

const AboutPage = () => {
  const teamMembers = [
    { name: "Game Designer", role: "Creative Vision", icon: "🎨" },
    { name: "Developer", role: "Technical Excellence", icon: "💻" },
    { name: "Artist", role: "Visual Storytelling", icon: "🖌️" },
  ];

  return (
    <div className="about-page">
      <section className="about-hero fade-in">
        <div className="container">
          <div className="about-hero-content">
            <h1>About MVG</h1>
            <p>
              Passionate game developers creating extraordinary experiences
              since 2024
            </p>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-section">
            <div className="story-section">
              <div className="story-text slide-in-left">
                <h2>Our Story</h2>
                <p>
                  MVG is an Argentine company dedicated to video game
                  development, founded in 2024 with a clear mission: to design
                  and develop innovative games that push the boundaries of
                  imagination.
                </p>
                <p>
                  We specialize in creating both our own original titles and
                  collaborating with other creators to bring their visions to
                  life. Every project we undertake is infused with passion,
                  creativity, and technical excellence.
                </p>
                <p>
                  Our team combines years of experience in game development with
                  fresh perspectives on what makes games truly memorable and
                  engaging.
                </p>
              </div>
              <div className="story-image slide-in-right"><img className="company-image" src="Principal1color.png" alt="MVG" /></div>
            </div>

            <div className="values-section">
              <h2 className="section-title">Our Values</h2>
              <div className="values-grid">
                <div className="value-card fade-in">
                  <div className="value-icon">🎨</div>
                  <h3>Creativity</h3>
                  <p>
                    We believe in the power of imagination to create worlds that
                    captivate and inspire players.
                  </p>
                </div>
                <div className="value-card fade-in">
                  <div className="value-icon">🌟</div>
                  <h3>Quality</h3>
                  <p>
                    Every detail matters. We strive for excellence in every
                    aspect of game development.
                  </p>
                </div>
                <div className="value-card fade-in">
                  <div className="value-icon">🤝</div>
                  <h3>Collaboration</h3>
                  <p>
                    Great games are made by great teams. We foster a culture of
                    collaboration and mutual respect.
                  </p>
                </div>
                <div className="value-card fade-in">
                  <div className="value-icon">🚀</div>
                  <h3>Innovation</h3>
                  <p>
                    We're always looking for new ways to push the boundaries of
                    what's possible in gaming.
                  </p>
                </div>
              </div>
            </div>

            <div className="team-section">
              <h2 className="section-title">Our Team</h2>
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-card fade-in">
                    <div className="team-icon">{member.icon}</div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
