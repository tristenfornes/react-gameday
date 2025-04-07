// src/pages/GamePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameDetails from '../components/GameDetails'; // Import the GameDetails component
import '../pages/css/GamePage.css';

const GamePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="game-details">
          <GameDetails /> {/* Renders the game details based on the route parameter */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GamePage;
