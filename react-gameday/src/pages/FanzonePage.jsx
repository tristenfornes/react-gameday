// src/pages/FanzonePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/css/FanzonePage.css';

// Import fan reaction images
import fanReaction1 from '../images/fanreaction1.jpeg';
import fanReaction2 from '../images/fanreaction2.jpeg';
import fanReaction3 from '../images/fanreaction3.jpeg';
import fanReaction4 from '../images/fanreaction4.jpeg';

const FanzonePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="fan-zone">
          <h2>Fan Zone</h2>

          {/* Fan Reactions Section */}
          <section className="fan-reactions">
            <h3>Fan Favorite Reactions</h3>
            <div className="reactions-grid">
              <img src={fanReaction1} alt="Excited Fan Reaction" />
              <img src={fanReaction2} alt="Cheering Fan" />
              <img src={fanReaction3} alt="Celebratory Fan" />
              <img src={fanReaction4} alt="Dramatic Fan Reaction" />
            </div>
          </section>

          {/* Games of the Day Section */}
          <section className="games-of-the-day">
            <h3>Games of the Day</h3>
            <div className="games-text">
              <h4>Game of the Day: The Lions vs. The Tigers</h4>
              <p>
                In a nail-biting finish, The Lions clinched victory against The Tigers with a dramatic last-minute goal.
                Despite a valiant effort by The Tigers, the momentum swung in favor of The Lions, leaving fans exhilarated and speechless.
              </p>
              <h4>Game of the Day: The Eagles vs. The Hawks</h4>
              <p>
                The Eagles soared to a dominant win over The Hawks in a match full of dynamic plays and strategic brilliance.
                The game showcased superb teamwork and individual skill, setting the stage for what promises to be an exciting season.
              </p>
              <h4>Game of the Day: The Sharks vs. The Dolphins</h4>
              <p>
                In a high-scoring encounter, The Sharks outpaced The Dolphins with relentless offensive pressure and tight defense.
                The match was a rollercoaster of emotions, culminating in a well-deserved win for The Sharks.
              </p>
            </div>
          </section>

          {/* Fan Discussions Section */}
          <section className="fan-discussions">
            <h3>Fan Discussions</h3>
            <p>
              Join our vibrant community and share your insights, predictions, and passionate commentary about your favorite teams and games.
              We encourage respectful and lively conversations that make every fan feel part of the action.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FanzonePage;
