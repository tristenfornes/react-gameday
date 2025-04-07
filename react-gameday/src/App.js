// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';         // Converted from home/index.html
import AboutPage from './pages/AboutPage';         // Converted from about.html
import FanzonePage from './pages/FanzonePage';       // Converted from fanzone.html
import FixturesPage from './pages/FixturesPage';     // Converted from fixtures.html
import GamePage from './pages/GamePage';           // Converted from game.html
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fanzone" element={<FanzonePage />} />
        <Route path="/fixtures" element={<FixturesPage />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
