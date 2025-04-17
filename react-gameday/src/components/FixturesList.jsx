import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import './css/FixturesList.css';

const FixturesList = ({ games, onDelete }) => (
  <div className="fixtures-list">
    {games.map(game => (
      <div key={game._id} className="fixture-item-wrapper">
        <Link to={`/game/${game._id}`} className="fixture-link">
          <GameCard
            main_image={game.img_name}
            teamA={game.teamA}
            teamB={game.teamB}
            date={game.date}
            location={game.location}
            game_summary={game.game_summary}
          />
        </Link>
        <div className="fixture-actions">
          <Link to={`/edit-game/${game._id}`} className="edit-btn">
            Edit
          </Link>
          <button onClick={() => onDelete(game._id)} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default FixturesList;
