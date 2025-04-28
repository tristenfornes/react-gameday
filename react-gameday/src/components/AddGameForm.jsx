import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/AddGameForm.css';

const API = process.env.REACT_APP_API_URL;

export default function AddGameForm({ initialData, isEdit = false, onSuccess }) {
  const nav = useNavigate();
  const [form, setForm] = useState({
    sport: 'NFL', teamA:'', teamB:'', date:'', location:'', score:'',
    game_summary:'', play_by_play:'', match_stats:{}
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({ ...initialData, date: initialData.date.slice(0,10) });
    }
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleFile = e => setFile(e.target.files[0]);
  const handleStats = e => {
    const { name, value } = e.target;
    setForm(f => ({
      ...f,
      match_stats: { ...f.match_stats, [name]: value }
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', file);
    data.append('sport', form.sport);
    data.append('teamA', form.teamA);
    data.append('teamB', form.teamB);
    data.append('date', form.date);
    data.append('location', form.location);
    data.append('score', form.score);
    data.append('game_summary', form.game_summary);
    data.append('play_by_play', form.play_by_play);
    data.append('match_stats', JSON.stringify(form.match_stats));

    try {
      const url = isEdit
        ? `${API}/api/games/${initialData._id}`
        : `${API}/api/games`;
      const method = isEdit ? axios.put : axios.post;
      const res = await method(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setStatus({ type:'success', msg: res.data.message });
      if (onSuccess) onSuccess(res.data.game);
      setTimeout(() => nav('/fixtures'), 1000);
    } catch (err) {
      setStatus({
        type:'error',
        msg: err.response?.data?.error || err.message
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-game-form">
      <h2>{isEdit ? 'Edit Game' : 'Add New Game'}</h2>

      {/* Sport dropdown (only add mode) */}
      {!isEdit && (
        <select name="sport" value={form.sport} onChange={handleChange}>
          <option value="NFL">NFL</option>
          <option value="NBA">NBA</option>
          <option value="NHL">NHL</option>
          <option value="MLB">MLB</option>
          <option value="Soccer">Soccer</option>
        </select>
      )}

      <input name="teamA" value={form.teamA} onChange={handleChange} placeholder="Team A" required/>
      <input name="teamB" value={form.teamB} onChange={handleChange} placeholder="Team B" required/>
      <input type="date" name="date" value={form.date} onChange={handleChange} required/>
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required/>
      <input name="score" value={form.score} onChange={handleChange} placeholder="Score" required/>

      <textarea
        name="game_summary"
        value={form.game_summary}
        onChange={handleChange}
        placeholder="Game Summary"
        required
      />

      <textarea
        name="play_by_play"
        value={form.play_by_play}
        onChange={handleChange}
        placeholder="Play by Play"
        required
      />

      {/* Stats fields */}
      {Object.entries(form.match_stats).map(([k,v]) => (
        <div key={k}>
          <label>{k.replace(/_/g,' ')}</label>
          <input name={k} value={v} onChange={handleStats} required/>
        </div>
      ))}

      {/* File input */}
      <input type="file" accept="image/*" onChange={handleFile} required={!isEdit} />

      <button type="submit">{isEdit ? 'Save' : 'Add'}</button>
      <button type="button" onClick={() => nav('/fixtures')}>Cancel</button>

      {status.msg && (
        <p className={status.type === 'error' ? 'error' : 'success'}>
          {status.msg}
        </p>
      )}
    </form>
  );
}
