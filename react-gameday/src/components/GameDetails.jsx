import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/GameDetails.css';

const API = process.env.REACT_APP_API_URL;

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    axios.get(`${API}/api/games/${id}`)
      .then(res => setGame(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading…</p>;
  if (error)   return <p>Error: {error.message}</p>;
  if (!game)   return <p>Game not found.</p>;

  return (
    <div className="game-details">
      <h2>{game.teamA} vs {game.teamB}</h2>
      <p><strong>Date:</strong> {new Date(game.date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {game.location}</p>
      <img
        src={`${API}/images/${game.img_name}`}
        alt={`${game.teamA} vs ${game.teamB}`}
      />
      <section>
        <h3>Summary</h3>
        <p>{game.game_summary}</p>
      </section>
      <section>
        <h3>Play-by-Play</h3>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{game.play_by_play}</pre>
      </section>
      <section className="game-stats">
        <h3>Match Stats</h3>
        <ul>
          {Array.from(game.match_stats.entries()).map(([key, val]) => (
            <li key={key}>
              <strong>{key.replace(/_/g, ' ')}:</strong> {val}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
