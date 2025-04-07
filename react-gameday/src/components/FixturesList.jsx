import React, { useEffect, useState } from 'react';
import './css/FixturesList.css';

const FixturesList = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your live endpoint for fixtures
    fetch('https://server-side-code-nqwa.onrender.com')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setFixtures(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching fixtures:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading fixtures...</div>;
  if (error) return <div>Error loading fixtures: {error.message}</div>;

  return (
    <div className="fixtures-list">
      {fixtures.map((fixture, index) => (
        <div key={index} className="fixture-item">
          <h3>{fixture.match}</h3>
          <p>{fixture.date}</p>
          <p>{fixture.venue}</p>
        </div>
      ))}
    </div>
  );
};

export default FixturesList;
