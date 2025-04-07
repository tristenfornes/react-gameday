// src/pages/FixturesPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixturesList from '../components/FixturesList'; // Import the dynamic fixture component
import '../pages/css/FixturesPage.css';

const FixturesPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="fixtures">
          <h2>Fixtures</h2>
          <FixturesList />  {/* Render the dynamic fixture items here */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FixturesPage;
