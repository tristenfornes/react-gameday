// src/pages/FixturesPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/css/FixturesPage.css';

const FixturesPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="fixtures">
          <h2>Fixtures</h2>
          <div id="fixtures-container">
            {/* Dynamic fixture items will be rendered here in the future */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FixturesPage;
