// src/components/GameCard.jsx
import React from 'react';
import './css/GameCard.css';

const GameCard = (props) => {
  return (
    <div className="game-card">
      <img 
        src={`https://server-side-code-nqwa.onrender.com/images/${props.main_image}`} 
        alt={props.name} 
      />
      <h3>{props.teamA} vs {props.teamB}</h3>
      <p>Date: {props.date} at {props.location}</p>
      <p>{props.game_summary}</p>
    </div>
  );
};

export default GameCard;
