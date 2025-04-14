// src/pages/FixturesPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixturesList from '../components/FixturesList';
import { Link } from 'react-router-dom';
import '../pages/css/FixturesPage.css';

const FixturesPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="fixtures">
          <h2>Fixtures</h2>
          <FixturesList />
          <div className="add-game-link" style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/add-game">Add a New Game</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FixturesPage;
