// src/pages/AboutPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/css/AboutPage.css';

// Import images
import storyImage from '../images/story.jpeg';
import comingupImage from '../images/comingup.jpeg';
import goalImage from '../images/goal.webp';
import foundersImage from '../images/founders.webp';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Our Story Section */}
        <section className="our-story">
          <h2>Our Story</h2>
          <img src={storyImage} alt="Fans in a Stadium" />
          <p>
            Founded by passionate sports enthusiasts, GameDay Central was created to deliver real-time scores, in-depth analysis, and a thriving community for fans.
            Our mission is to bring you accurate, timely sports news while celebrating the spirit of the game.
          </p>
          <p>
            We strive to create a platform that not only informs but also inspires our fans. Our dedicated team works around the clock to ensure that you are always updated
            with the latest happenings in the world of sports, making every moment on GameDay Central an experience to remember.
          </p>
        </section>

        {/* Top Row: 3 Blocks */}
        <section className="about-blocks-top">
          <div className="block">
            <h2>Coming Up</h2>
            <img src={comingupImage} alt="Upcoming Matches" />
            <p>
              Stay in the loop with our regularly updated schedule of upcoming matches and events. We highlight all the critical fixtures so you never miss the action.
            </p>
            <p>
              Our calendar is carefully curated by experts who understand the pulse of the game, ensuring you always know what’s coming next in the sports world.
            </p>
          </div>
          <div className="block">
            <h2>Goals</h2>
            <img src={goalImage} alt="Our Goals" />
            <p>
              Our goal is to be your most trusted source for live sports updates and comprehensive game analysis. We work tirelessly to ensure you receive the latest information with clarity and passion.
            </p>
            <p>
              We believe in delivering quality content that enhances your viewing experience, deepens your understanding of the game, and fuels your enthusiasm for sports.
            </p>
          </div>
          <div className="block">
            <h2>Founders</h2>
            <img src={foundersImage} alt="Our Founders" />
            <p>
              Our team consists of dedicated professionals with a shared passion for sports. Learn more about the visionaries behind GameDay Central and their unwavering commitment to excellence.
            </p>
            <p>
              Their combined expertise and relentless drive have shaped our platform into a reliable and engaging source for all your sports news, uniting fans across the globe.
            </p>
          </div>
        </section>

        {/* Bottom Row: Contact Information */}
        <section className="about-blocks-bottom">
          <div className="block">
            <h2>Contact Information</h2>
            <p>
              We love connecting with our community! For inquiries, feedback, or support, please email us at <strong>info@gamedaycentral.com</strong> or call us at <strong>(123) 456-7890</strong>.
            </p>
            <p>
              Our team is always eager to hear from you and ensure your experience with GameDay Central is exceptional.
            </p>
          </div>
        </section>

        {/* Contact Form & Headquarters Section */}
        <section className="contact-content">
          <h2>Contact Our Headquarters</h2>
          <p>Have a question or need support? Reach out to our headquarters and we’ll get back to you promptly.</p>
          <form id="contact-form">
            <input type="hidden" name="access_key" value="ce11450c-8c8f-4735-9cc9-572d94f53cc3" />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="First and Last" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
            <label htmlFor="contact-method">Preferred Contact Method:</label>
            <select id="contact-method" name="contact-method">
              <option>Email</option>
              <option>Phone</option>
              <option>Text</option>
            </select>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="hidden" name="subject" value="Contact from GameDay Central Headquarters" />
            <input type="hidden" name="from_name" value="GameDay Central Website" />
            <button type="submit">Send</button>
            <button type="reset">Cancel</button>
            <div id="result"></div>
          </form>
          <h3>Visit Our Headquarters</h3>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211593.67774992716!2d-81.1023708995099!3d34.0399919986034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a5697931d1e3%3A0xf32808f4b379fa96!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1742330969352!5m2!1sen!2sus"
            allowFullScreen=""
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
