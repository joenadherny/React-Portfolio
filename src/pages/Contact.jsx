// pages/Contact/Contact.jsx
import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

    // Example: Validate the form fields
    if (!formData.name.trim()) {
      setErrors({ ...errors, name: 'Name is required' });
      return;
    }

    if (!formData.email.trim()) {
      setErrors({ ...errors, email: 'Email is required' });
      return;
    }

    // Add more validation as needed

    // Example: Log the form data
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
