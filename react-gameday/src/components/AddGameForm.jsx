// src/components/AddGameForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './css/AddGameForm.css';

// Define the match stats configuration for each sport
const sportStatsConfig = {
  NFL: [
    { name: 'total_yards', label: 'Total Yards', placeholder: 'e.g., 350-320' },
    { name: 'turnovers', label: 'Turnovers', placeholder: 'e.g., 1-2' },
    { name: 'penalty_yards', label: 'Penalty Yards', placeholder: 'e.g., 45-55' },
    { name: 'time_of_possession', label: 'Time Of Possession', placeholder: 'e.g., 30:15-29:45' },
  ],
  NBA: [
    { name: 'FG_percent', label: 'Field Goal %', placeholder: 'e.g., 48%-45%' },
    { name: 'rebounds', label: 'Rebounds', placeholder: 'e.g., 42-38' },
    { name: 'assists', label: 'Assists', placeholder: 'e.g., 25-23' },
    { name: 'turnovers', label: 'Turnovers', placeholder: 'e.g., 12-15' },
  ],
  NHL: [
    { name: 'shots_on_goal', label: 'Shots on Goal', placeholder: 'e.g., 35-32' },
    { name: 'penalty_minutes', label: 'Penalty Minutes', placeholder: 'e.g., 8-10' },
    { name: 'hits', label: 'Hits', placeholder: 'e.g., 12-9' },
    { name: 'power_play_percentage', label: 'Power Play %', placeholder: 'e.g., 25%-20%' },
  ],
  MLB: [
    { name: 'innings', label: 'Innings', placeholder: 'e.g., 9' },
    { name: 'strikeouts', label: 'Strikeouts', placeholder: 'e.g., 12-10' },
    { name: 'earned_run_average', label: 'ERA', placeholder: 'e.g., 2.85-3.20' },
    { name: 'hits', label: 'Hits', placeholder: 'e.g., 8-9' },
  ],
  Soccer: [
    { name: 'possession', label: 'Possession %', placeholder: 'e.g., 55%' },
    { name: 'shots', label: 'Shots', placeholder: 'e.g., 15' },
    { name: 'fouls', label: 'Fouls', placeholder: 'e.g., 12' },
    { name: 'corners', label: 'Corners', placeholder: 'e.g., 7' },
  ]
};

const AddGameForm = ({ onGameAdded }) => {
  const [formData, setFormData] = useState({
    sport: 'NFL',
    // Remove the image input field and set a default image
    img_name: 'default.jpeg',
    teamA: '',
    teamB: '',
    date: '',
    location: '',
    score: '',
    game_summary: '',
    play_by_play: '',
    match_stats: {}
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'

  // Handle changes for all top-level fields (including sport)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset match_stats when sport changes
      ...(name === 'sport' && { match_stats: {} })
    }));
  };

  // Handle changes for match_stats fields
  const handleStatsChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      match_stats: {
        ...prev.match_stats,
        [name]: value
      }
    }));
  };

  const validateForm = () => {
    // Basic client-side validation: ensure required fields are filled
    const requiredFields = ['teamA', 'teamB', 'date', 'location', 'score', 'game_summary', 'play_by_play', 'sport'];
    for (let field of requiredFields) {
      if (!formData[field]) return false;
    }
    // Optionally, ensure that each match stat field for the selected sport is filled
    const statsForSport = sportStatsConfig[formData.sport] || [];
    for (let stat of statsForSport) {
      if (!formData.match_stats[stat.name]) return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    setStatusType('');

    if (!validateForm()) {
      setStatusMessage('Please fill in all required fields.');
      setStatusType('error');
      return;
    }

    try {
      const response = await axios.post('https://server-side-code-nqwa.onrender.com/api/games', formData);
      if (response.status === 201) {
        setStatusMessage('Game added successfully!');
        setStatusType('success');
        setFormData({
          sport: 'NFL',
          img_name: 'default.jpeg',
          teamA: '',
          teamB: '',
          date: '',
          location: '',
          score: '',
          game_summary: '',
          play_by_play: '',
          match_stats: {}
        });
        if (onGameAdded) onGameAdded(response.data.game);
      }
    } catch (err) {
      console.error('Error adding game:', err);
      setStatusMessage(err.response?.data?.error || 'Error adding game.');
      setStatusType('error');
    }

    setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
    }, 5000);
  };

  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
      <h2>Add New Game</h2>
      
      <label htmlFor="sport">Sport:</label>
      <select id="sport" name="sport" value={formData.sport} onChange={handleChange} required>
        {Object.keys(sportStatsConfig).map((sportOption) => (
          <option key={sportOption} value={sportOption}>{sportOption}</option>
        ))}
      </select>
      
      {/* Removed the image input field */}

      <label htmlFor="teamA">Team A:</label>
      <input
        type="text"
        id="teamA"
        name="teamA"
        value={formData.teamA}
        onChange={handleChange}
        required
      />

      <label htmlFor="teamB">Team B:</label>
      <input
        type="text"
        id="teamB"
        name="teamB"
        value={formData.teamB}
        onChange={handleChange}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label htmlFor="score">Score:</label>
      <input
        type="text"
        id="score"
        name="score"
        value={formData.score}
        onChange={handleChange}
        required
      />

      <label htmlFor="game_summary">Game Summary:</label>
      <textarea
        id="game_summary"
        name="game_summary"
        value={formData.game_summary}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="play_by_play">Play-by-Play:</label>
      <textarea
        id="play_by_play"
        name="play_by_play"
        value={formData.play_by_play}
        onChange={handleChange}
        required
      ></textarea>

      <fieldset>
        <legend>Match Stats for {formData.sport}</legend>
        {sportStatsConfig[formData.sport].map(stat => (
          <div key={stat.name}>
            <label htmlFor={stat.name}>{stat.label}:</label>
            <input
              type="text"
              id={stat.name}
              name={stat.name}
              placeholder={stat.placeholder}
              value={formData.match_stats[stat.name] || ''}
              onChange={handleStatsChange}
              required
            />
          </div>
        ))}
      </fieldset>

      <button type="submit">Add Game</button>
      <button type="reset">Cancel</button>

      {statusMessage && (
        <div className={`status-message ${statusType}`}>
          {statusMessage}
        </div>
      )}
    </form>
  );
};

export default AddGameForm;
