// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/css/HomePage.css';

// Import images
import homeeImage from '../images/homee.jpeg';
import liveNews1 from '../images/livenews1.jpeg';
import liveNews2 from '../images/livenews2.jpeg';
import liveNews3 from '../images/livenews3.jpeg';
import liveNews4 from '../images/livenews4.jpeg';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <img src={homeeImage} alt="Crowd in a Stadium" />
          <div className="hero-text">
            <h2>Welcome to GameDay Central</h2>
            <p>
              Your ultimate source for live sports scores, in-depth analysis, and a vibrant fan community.
            </p>
          </div>
        </section>

        {/* Latest Sports News Section */}
        <section className="latest-news">
          <h2>Latest Sports News</h2>
          <div className="news-container">
            <article className="news-item">
              <img src={liveNews1} alt="Exciting Match" />
              <h3>Home Team Clinches a Last-Minute Victory</h3>
              <p>The home side secured a stunning win with a dramatic last-minute goal.</p>
            </article>
            <article className="news-item">
              <img src={liveNews2} alt="Championship Prep" />
              <h3>Championship Showdown Approaches</h3>
              <p>Anticipation builds as top contenders gear up for the championship match.</p>
            </article>
            <article className="news-item">
              <img src={liveNews3} alt="Record-Breaking Performance" />
              <h3>Star Player Sets New Record</h3>
              <p>An unforgettable performance as our star shatters long-standing records.</p>
            </article>
            <article className="news-item">
              <img src={liveNews4} alt="Incredible Comeback" />
              <h3>Incredible Comeback Seals the Win</h3>
              <p>
                After trailing most of the match, the underdogs staged an impressive comeback in the final minutes.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
