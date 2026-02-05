import React, { useEffect, useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMsg, setSuccessMsg] = useState("");

  // Smooth fade-in on page load
  useEffect(() => {
    setTimeout(() => setVisible(true), 100); // slight delay
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add email sending logic (SMTP, EmailJS, etc.)
    setSuccessMsg("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSuccessMsg(""), 5000);
  };

  return (
    <section className={`contact-section ${visible ? "fade-in" : ""}`} id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hi? Drop me a message and I'll get back to you!
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:mdparvez@example.com">parvezpg321@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+1234567890">+91-6398823209</a></p>
            <p><strong>Location:</strong> Muzaffarnagar, India</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
            <h2 style={{textAlign: "start"}}>Contac us</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>
      </div>
    </section>
  );
};

