import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/GameDetails.css';

const GameDetails = () => {
  const { id } = useParams(); // Assumes your route is "/game/:id"
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://server-side-code-nqwa.onrender.com/api/games/${id}`)
      .then(response => {
        setGame(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching game details:', err);
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading game details...</div>;
  if (error) return <div>Error loading game details: {error.message}</div>;
  if (!game) return <div>No game data available.</div>;

  return (
    <div className="game-details">
      <h2>{game.teamA} vs {game.teamB}</h2>
      <p>Date: {game.date}</p>
      <p>Location: {game.location}</p>
      <img src={`/images/${game.img_name}`} alt={`${game.teamA} vs ${game.teamB}`} />
      <p>{game.game_summary}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default GameDetails;
