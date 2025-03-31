// src/pages/GamePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/css/GamePage.css';

const GamePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="game-details">
          {/* This section will be populated with the selected game's details */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GamePage;
