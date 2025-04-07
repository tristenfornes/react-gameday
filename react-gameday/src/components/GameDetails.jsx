import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/GameDetails.css';

const GameDetails = () => {
  const { id } = useParams(); // Expecting a route like "/game/:id"
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
      <h2>{game.teamA} vs {game.teamB} - {game.date}</h2>
      
      <section className="summary-section">
        <h3>Game Summary</h3>
        <p>{game.game_summary}</p>
      </section>
      
      <section className="playbyplay-section">
        <h3>Play-by-Play</h3>
        <pre>{game.play_by_play}</pre>
      </section>
      
      <section className="match-stats-section">
        <h3>Match Stats</h3>
        <ul>
          {game.match_stats && Object.keys(game.match_stats).map((statKey) => (
            <li key={statKey}>
              {statKey.replace('_', ' ')}: {game.match_stats[statKey]}
            </li>
          ))}
        </ul>
      </section>
      
      <section className="image-section">
        <img src={`/images/${game.img_name}`} alt={`${game.teamA} vs ${game.teamB}`} />
      </section>
    </div>
  );
};

export default GameDetails;
