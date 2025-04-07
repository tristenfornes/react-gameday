import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/css/AboutPage.css';
import storyImage from '../images/story.jpeg';
import comingupImage from '../images/comingup.jpeg';
import goalImage from '../images/goal.webp';
import foundersImage from '../images/founders.webp';
import ContactForm from '../components/ContactForm';

const AboutPage = () => {
  return (
    <div>
      <Header />
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

        <section className="map-section">
          <h3>Visit Our Headquarters</h3>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211593.67774992716!2d-81.1023708995099!3d34.0399919986034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a5697931d1e3%3A0xf32808f4b379fa96!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1742330969352!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
