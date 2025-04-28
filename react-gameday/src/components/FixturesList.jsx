import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/FixturesList.css';

const API = process.env.REACT_APP_API_URL;

export default function FixturesList() {
  const [fixtures, setFixtures] = useState([]);
  const [loading,  setLoading ] = useState(true);
  const [error,    setError   ] = useState(null);

  useEffect(() => {
    axios.get(`${API}/api/games`)
      .then(res => setFixtures(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error)   return <p>Error: {error.message}</p>;

  return (
    <div className="fixtures-list">
      {fixtures.map(game => (
        <div key={game._id} className="fixture-item">
          <img
            src={`${API}/images/${game.img_name}`}
            alt={`${game.teamA} vs ${game.teamB}`}
          />
          <div className="content">
            <h3>{game.teamA} vs {game.teamB}</h3>
            <p>{new Date(game.date).toLocaleDateString()} @ {game.location}</p>
          </div>
          <div className="fixture-actions">
            {/* your Edit/Delete buttons here */}
          </div>
        </div>
      ))}
    </div>
  );
}
