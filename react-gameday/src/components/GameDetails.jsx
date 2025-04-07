import React, { useEffect, useState } from 'react';
import './css/GameDetails.css';

const GameDetails = ({ gameId }) => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your live endpoint for a specific game
    fetch(`https://server-side-code-nqwa.onrender.com`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGame(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching game details:', error);
        setError(error);
        setLoading(false);
      });
  }, [gameId]);

  if (loading) return <div>Loading game details...</div>;
  if (error) return <div>Error loading game details: {error.message}</div>;
  if (!game) return <div>No game data available.</div>;

  return (
    <div className="game-details">
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default GameDetails;
