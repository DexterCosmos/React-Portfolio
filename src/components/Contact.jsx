// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section className="section contact" aria-label="contact me" id="contact">
      <div className="container">
        <h2 className="title h2 section-title">Get In Touch</h2>

        <div className="contact-content">
          <form action="./index.html" method="post" className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              autoComplete="off"
              required
              className="input-field"
            />

            <input
              type="email"
              name="email_address"
              placeholder="Email address"
              autoComplete="off"
              required
              className="input-field"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              autoComplete="off"
              className="input-field"
            />

            <textarea
              name="message"
              placeholder="Enter messages"
              required
              className="input-field"
            ></textarea>

            <button type="submit" className="btn btn:hover">
              <span className="span">Get A Quote</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>
          </form>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d898.4329239267093!2d-73.91493787358391!3d40.76299026683699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671529019371!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>

          <ul className="contact-list">
            <li className="contact-item">
              <div className="item-icon">
                <img
                  src="./assets/images/contact-icon-1.svg"
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="contact icon"
                />
              </div>
              <div>
                <span className="title h6">(8080) 219935</span>
              </div>
            </li>

            <li className="contact-item">
              <div className="item-icon">
                <img
                  src="./assets/images/contact-icon-2.svg"
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="contact icon"
                />
              </div>
              <address className="title h6">Pune, Maharashtra, India.</address>
            </li>

            <li className="contact-item">
              <div className="item-icon">
                <img
                  src="./assets/images/contact-icon-3.svg"
                  width="50"
                  height="50"
                  loading="lazy"
                  alt="contact icon"
                />
              </div>
              <div>
                <span className="title h6">Dexter.Cosmos@outlook.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
