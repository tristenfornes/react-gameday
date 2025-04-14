// src/pages/AddGamePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddGameForm from '../components/AddGameForm';
import '../pages/css/AddGamePage.css';

const AddGamePage = () => {
  return (
    <div className="add-game-page-container">
      <Header />
      <main className="add-game-page">
        {/* The AddGameForm itself can include a heading if desired */}
        <AddGameForm />
      </main>
      <Footer />
    </div>
  );
};

export default AddGamePage;
