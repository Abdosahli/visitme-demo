import React, { useState } from "react";
import AboutPageTemplate from "./AboutPageTemplate";
 

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call here
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 4000);
  };

  const content = [
    {
      heading: "Get In Touch",
      text: "Have questions or feedback? Fill out the form below and we’ll respond promptly.",
    },
  ];

  return (
    <>
      <AboutPageTemplate
        title="Contact Us"
        subtitle="We’re here to help"
        content={content}
        image={HeroImage}
      />

      <div className="contact-form-container container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
          {success && <div className="contact-success">✅ Message sent successfully!</div>}
        </form>
      </div>
    </>
  );
};

export default Contact;
