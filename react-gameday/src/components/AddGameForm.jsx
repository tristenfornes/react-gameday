// src/components/AddGameForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './css/AddGameForm.css';

const AddGameForm = ({ onGameAdded }) => {
  const [formData, setFormData] = useState({
    img_name: '',
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

  // Handle input changes for top-level fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle changes for match_stats fields separately if needed (example: you might have inputs for total_yards, turnovers, etc.)
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
    // Basic client-side validation (ensure required fields are filled)
    const requiredFields = ['img_name', 'teamA', 'teamB', 'date', 'location', 'score', 'game_summary', 'play_by_play'];
    for (let field of requiredFields) {
      if (!formData[field]) return false;
    }
    // For match_stats, you can add additional validation if needed
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
        // Optionally clear the form
        setFormData({
          img_name: '',
          teamA: '',
          teamB: '',
          date: '',
          location: '',
          score: '',
          game_summary: '',
          play_by_play: '',
          match_stats: {}
        });
        // Notify parent (if needed) to update list
        if (onGameAdded) onGameAdded(response.data.game);
      }
    } catch (err) {
      console.error('Error adding game:', err);
      setStatusMessage(err.response?.data?.error || 'Error adding game.');
      setStatusType('error');
    }

    // Clear the status message after 5 seconds
    setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
    }, 5000);
  };

  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
      <h2>Add New Game</h2>
      
      <label htmlFor="img_name">Image File Name:</label>
      <input
        type="text"
        id="img_name"
        name="img_name"
        value={formData.img_name}
        onChange={handleChange}
        placeholder="e.g., lions.jpeg"
        required
      />

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
        <legend>Match Stats</legend>
        <label htmlFor="total_yards">Total Yards:</label>
        <input
          type="text"
          id="total_yards"
          name="total_yards"
          value={formData.match_stats.total_yards || ''}
          onChange={handleStatsChange}
        />

        <label htmlFor="turnovers">Turnovers:</label>
        <input
          type="text"
          id="turnovers"
          name="turnovers"
          value={formData.match_stats.turnovers || ''}
          onChange={handleStatsChange}
        />

        <label htmlFor="penalty_yards">Penalty Yards:</label>
        <input
          type="text"
          id="penalty_yards"
          name="penalty_yards"
          value={formData.match_stats.penalty_yards || ''}
          onChange={handleStatsChange}
        />

        <label htmlFor="time_of_possession">Time of Possession:</label>
        <input
          type="text"
          id="time_of_possession"
          name="time_of_possession"
          value={formData.match_stats.time_of_possession || ''}
          onChange={handleStatsChange}
        />
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
