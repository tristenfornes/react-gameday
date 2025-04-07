import React from 'react';
import '../pages/css/AboutPage.css';
import storyImage from '../images/story.jpeg';
import comingupImage from '../images/comingup.jpeg';
import goalImage from '../images/goal.webp';
import foundersImage from '../images/founders.webp';
import ContactForm from '../components/ContactForm';

const AboutPage = () => {
  return (
    <main className="about-page">
      <section className="our-story">
        <h2>Our Story</h2>
        <img src={storyImage} alt="Fans in a Stadium" />
        <p>
          Founded by passionate sports enthusiasts, GameDay Central was created to deliver real-time scores, in-depth analysis, and a thriving community for fans.
          Our mission is to bring you accurate, timely sports news while celebrating the spirit of the game.
        </p>
        <p>
          We strive to create a platform that not only informs but also inspires our fans.
        </p>
      </section>

      <section className="about-blocks-top">
        <div className="block">
          <h2>Coming Up</h2>
          <img src={comingupImage} alt="Upcoming Matches" />
          <p>Stay in the loop with our updated schedule of upcoming matches and events.</p>
        </div>
        <div className="block">
          <h2>Goals</h2>
          <img src={goalImage} alt="Our Goals" />
          <p>Our goal is to be your most trusted source for live sports updates and analysis.</p>
        </div>
        <div className="block">
          <h2>Founders</h2>
          <img src={foundersImage} alt="Our Founders" />
          <p>Meet the visionaries behind GameDay Central, committed to delivering quality content.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Our Headquarters</h2>
        <p>Have a question or need support? Reach out to us.</p>
        <ContactForm />
      </section>
    </main>
  );
};

export default AboutPage;
