// src/components/FixturesList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/FixturesList.css';

const FixturesList = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://server-side-code-nqwa.onrender.com/api/games')
      .then(response => {
        setFixtures(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching fixtures:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading fixtures...</div>;
  if (error) return <div>Error loading fixtures: {error.message}</div>;

  return (
    <div className="fixtures-list">
      {fixtures.map(fixture => (
        <Link key={fixture._id} to={`/game/${fixture._id}`} className="fixture-link">
          <div className="fixture-item">
            <h3>{fixture.teamA} vs {fixture.teamB}</h3>
            <p>{fixture.date} at {fixture.location}</p>
            <img 
              src={`https://server-side-code-nqwa.onrender.com/images/${fixture.img_name}`} 
              alt={`${fixture.teamA} vs ${fixture.teamB}`} 
            />
            <p>{fixture.game_summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FixturesList;
