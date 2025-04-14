// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FixturesPage from './pages/FixturesPage';
import GamePage from './pages/GamePage';
import AddGamePage from './pages/AddGamePage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/fixtures" element={<FixturesPage />} />
      <Route path="/game/:id" element={<GamePage />} />
      <Route path="/add-game" element={<AddGamePage />} />
    </Routes>
  );
}

export default App;
