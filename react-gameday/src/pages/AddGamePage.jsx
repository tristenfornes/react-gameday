// src/pages/AddGamePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddGameForm from '../components/AddGameForm';
import '../pages/css/AddGamePage.css';

const AddGamePage = () => {
  return (
    <div>
      <Header />
      <main className="add-game-page">
        <h2>Add a New Game</h2>
        <AddGameForm />
      </main>
      <Footer />
    </div>
  );
};

export default AddGamePage;
