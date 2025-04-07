import React, { useState } from 'react';
import './css/ContactForm.css';

const ContactForm = () => {
  // Set initial state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contact_method: 'Email',
    subject: '',
    message: ''
  });
  // State for result message and its type ("success" or "error")
  const [resultMsg, setResultMsg] = useState('');
  const [resultType, setResultType] = useState('');

  // Update form field state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultMsg('Please wait....');
    setResultType('');

    // Prepare the data to send. Include hidden fields values.
    const dataToSend = {
      ...formData,
      access_key: 'ce11450c-8c8f-4735-9cc9-572d94f53cc3',
      redirect: 'https://web3forms.com/success',
      subject: 'Contact from GameDay Central Headquarters',
      from_name: 'GameDay Central Website'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
      if (response && response.status === 200) {
        setResultMsg('Email successfully sent!');
        setResultType('success');
        // Optionally clear the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          contact_method: 'Email',
          subject: '',
          message: ''
        });
      } else {
        setResultMsg('Sorry, your email was not sent.');
        setResultType('error');
      }
    } catch (error) {
      console.error(error);
      setResultMsg("Sorry, your email couldn't be sent.");
      setResultType('error');
    }

    // Clear the message after 5 seconds
    setTimeout(() => {
      setResultMsg('');
      setResultType('');
    }, 5000);
  };

  // Handle form reset: clear all fields
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      contact_method: 'Email',
      subject: '',
      message: ''
    });
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} onReset={handleReset} className="contact-form">
      {/* Hidden input for access key (could be omitted since it's added in dataToSend) */}
      <input type="hidden" name="access_key" value="ce11450c-8c8f-4735-9cc9-572d94f53cc3" />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="First and Last"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label htmlFor="contact_method">Preferred Contact Method:</label>
      <select
        id="contact-method"
        name="contact_method"
        value={formData.contact_method}
        onChange={handleChange}
      >
        <option>Email</option>
        <option>Phone</option>
        <option>Text</option>
      </select>

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      {/* Hidden fields */}
      <input type="hidden" name="redirect" value="https://web3forms.com/success" />
      <input type="hidden" name="subject" value="Contact from GameDay Central Headquarters" />
      <input type="hidden" name="from_name" value="GameDay Central Website" />

      <button type="submit">Send</button>
      <button type="reset">Cancel</button>

      {/* Display the result message */}
      <div id="result" className={resultType}>
        {resultMsg}
      </div>
    </form>
  );
};

export default ContactForm;
