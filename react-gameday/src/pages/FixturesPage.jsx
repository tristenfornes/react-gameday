import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixturesList from '../components/FixturesList';
import '../pages/css/FixturesPage.css';

const FixturesPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://server-side-code-nqwa.onrender.com/api/games')
      .then(res => {
        setGames(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://server-side-code-nqwa.onrender.com/api/games/${id}`)
      .then(() => setGames(prev => prev.filter(g => g._id !== id)))
      .catch(console.error);
  };

  return (
    <div>
      <Header />
      <main>
        <section className="fixtures">
          <h2>Fixtures</h2>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && (
            <FixturesList games={games} onDelete={handleDelete} />
          )}
          <div className="add-game-link">
            <Link to="/add-game">Add a New Game</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FixturesPage;
