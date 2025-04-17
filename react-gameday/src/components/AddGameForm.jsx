// src/components/AddGameForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/AddGameForm.css';

// Stats configuration per sport
const sportStatsConfig = {
  NFL: [
    { name: 'total_yards', label: 'Total Yards', placeholder: 'e.g., 350-320' },
    { name: 'turnovers', label: 'Turnovers', placeholder: 'e.g., 1-2' },
    { name: 'penalty_yards', label: 'Penalty Yards', placeholder: 'e.g., 45-55' },
    { name: 'time_of_possession', label: 'Time of Possession', placeholder: 'e.g., 30:15-29:45' }
  ],
  NBA: [
    { name: 'FG_percent', label: 'Field Goal %', placeholder: 'e.g., 48%-45%' },
    { name: 'rebounds', label: 'Rebounds', placeholder: 'e.g., 42-38' },
    { name: 'assists', label: 'Assists', placeholder: 'e.g., 25-23' },
    { name: 'turnovers', label: 'Turnovers', placeholder: 'e.g., 12-15' }
  ],
  NHL: [
    { name: 'shots_on_goal', label: 'Shots on Goal', placeholder: 'e.g., 35-32' },
    { name: 'penalty_minutes', label: 'Penalty Minutes', placeholder: 'e.g., 8-10' },
    { name: 'hits', label: 'Hits', placeholder: 'e.g., 12-9' },
    { name: 'power_play_percentage', label: 'Power Play %', placeholder: 'e.g., 25%-20%' }
  ],
  MLB: [
    { name: 'innings', label: 'Innings', placeholder: 'e.g., 9' },
    { name: 'strikeouts', label: 'Strikeouts', placeholder: 'e.g., 12-10' },
    { name: 'earned_run_average', label: 'ERA', placeholder: 'e.g., 2.85-3.20' },
    { name: 'hits', label: 'Hits', placeholder: 'e.g., 8-9' }
  ],
  Soccer: [
    { name: 'possession', label: 'Possession %', placeholder: 'e.g., 55%-45%' },
    { name: 'shots', label: 'Shots', placeholder: 'e.g., 15' },
    { name: 'fouls', label: 'Fouls', placeholder: 'e.g., 12' },
    { name: 'corners', label: 'Corners', placeholder: 'e.g., 7' }
  ]
};

const AddGameForm = ({ initialData = null, onGameAdded, isEdit = false }) => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    sport: 'NFL',            // only used when adding
    teamA: '',
    teamB: '',
    date: '',
    location: '',
    score: '',
    game_summary: '',
    play_by_play: '',
    match_stats: {}
  });
  const [status, setStatus] = useState({ message: '', type: '' });

  // Prefill in Edit mode
  useEffect(() => {
    if (initialData) {
      setFormData({
        sport: initialData.sport,
        teamA: initialData.teamA,
        teamB: initialData.teamB,
        date: initialData.date,
        location: initialData.location,
        score: initialData.score,
        game_summary: initialData.game_summary,
        play_by_play: initialData.play_by_play,
        match_stats: { ...initialData.match_stats }
      });
    }
  }, [initialData]);

  // Handle change for simple fields
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle match_stats changes
  const handleStatsChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      match_stats: { ...prev.match_stats, [name]: value }
    }));
  };

  // Basic client-side validation
  const validate = () => {
    const requiredFields = [
      'teamA','teamB','date','location',
      'score','game_summary','play_by_play'
    ];
    for (let f of requiredFields) {
      if (!formData[f]) return false;
    }
    if (!isEdit) {
      const stats = sportStatsConfig[formData.sport] || [];
      for (let s of stats) {
        if (!formData.match_stats[s.name]) return false;
      }
    } else {
      for (let key of Object.keys(formData.match_stats)) {
        if (!formData.match_stats[key]) return false;
      }
    }
    return true;
  };

  // Submit handler
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ message: '', type: '' });

    if (!validate()) {
      setStatus({ message: 'Please fill all required fields.', type: 'error' });
      return;
    }

    try {
      const url = isEdit
        ? `https://server-side-code-nqwa.onrender.com/api/games/${initialData._id}`
        : 'https://server-side-code-nqwa.onrender.com/api/games';
      const method = isEdit ? 'put' : 'post';
      const res = await axios[method](url, formData);

      setStatus({ message: res.data.message, type: 'success' });
      if (onGameAdded) onGameAdded(res.data.game);
      if (isEdit) {
        setTimeout(() => navigate('/fixtures'), 1000);
      } else {
        setFormData({
          sport: 'NFL',
          teamA: '',
          teamB: '',
          date: '',
          location: '',
          score: '',
          game_summary: '',
          play_by_play: '',
          match_stats: {}
        });
      }
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.error || 'Submission error.';
      setStatus({ message: msg, type: 'error' });
    }

    setTimeout(() => setStatus({ message: '', type: '' }), 5000);
  };

  return (
    <form className="add-game-form" onSubmit={handleSubmit}>
      <h2>{isEdit ? 'Edit Game' : 'Add New Game'}</h2>

      {/* Sport dropdown only in Add mode */}
      {!isEdit && (
        <>
          <label htmlFor="sport">Sport:</label>
          <select
            id="sport"
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            required
          >
            {Object.keys(sportStatsConfig).map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </>
      )}

      <label htmlFor="teamA">Team A:</label>
      <input
        id="teamA"
        name="teamA"
        value={formData.teamA}
        onChange={handleChange}
        required
      />

      <label htmlFor="teamB">Team B:</label>
      <input
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
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label htmlFor="score">Score:</label>
      <input
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
      />

      <label htmlFor="play_by_play">Play-by-Play:</label>
      <textarea
        id="play_by_play"
        name="play_by_play"
        value={formData.play_by_play}
        onChange={handleChange}
        required
      />

      {/* Match Stats */}
      <fieldset>
        <legend>
          Match Stats {isEdit ? '' : `for ${formData.sport}`}
        </legend>

        {isEdit
          ? Object.entries(formData.match_stats).map(([key, val]) => (
              <div key={key}>
                <label htmlFor={key}>
                  {key.replace(/_/g, ' ')}:
                </label>
                <input
                  id={key}
                  name={key}
                  value={val}
                  onChange={handleStatsChange}
                  required
                />
              </div>
            ))
          : (sportStatsConfig[formData.sport] || []).map(stat => (
              <div key={stat.name}>
                <label htmlFor={stat.name}>{stat.label}:</label>
                <input
                  id={stat.name}
                  name={stat.name}
                  placeholder={stat.placeholder}
                  value={formData.match_stats[stat.name] || ''}
                  onChange={handleStatsChange}
                  required
                />
              </div>
            ))
        }
      </fieldset>

      <button type="submit">
        {isEdit ? 'Save Changes' : 'Add Game'}
      </button>
      <button
        type="button"
        onClick={() => navigate('/fixtures')}
      >
        Cancel
      </button>

      {status.message && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}
    </form>
  );
};

export default AddGameForm;
