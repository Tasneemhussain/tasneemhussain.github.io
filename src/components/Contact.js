import "./contact.css";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_al1wvvd",
        "template_dzk5knt",
        e.target,
        "H6RzFMEt9cPeExZoA"
      )
      .then((res) => {
        console.log(res);
        // Clear input fields after successful submission
        setName("");
        setEmail("");
        setMessage("");
        // Display success message
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.log(err);
        // Display error message
        alert("An error occurred. Please try again later.");
      });
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact" id="contact">
      <h1 className="title">Contact Me</h1>
      <p className="wrk-para">
        I'm excited to hear from you! Please take a moment to contact me through
        the contact form below.
      </p>
      <div className="row justify-content-around mt-5">
        <div className="col-md-6 ">
          <iframe
            title="Contact Form"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71330.43351934823!2d12.650244983589918!3d56.034672103224544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46522d7a50a22925%3A0x4019078290e7a90!2sHelsingborg!5e0!3m2!1sen!2sse!4v1689011150266!5m2!1sen!2sse"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-md-6 align-self-center">
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control p-2"
                required
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="user_email"
                className="form-control p-2"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-control p-2"
                name="message"
                rows="3"
                placeholder="Leave your message...."
                required
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="form-control mt-4 btn btn-primary p-2"
            />
          </form>
        </div>
      </div>
      <hr className="line" />
      <div class="row justify-content-around">
        <div class="col-4 mt-3 mb-4">
          <h3>Created by Tasneem.T Hussain 2023</h3>
        </div>
        <div class="col-4 mt-3 mb-4">
          <a href="https://github.com/Tasneemhussain">
            <FaGithub className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/tasneem-hussain-023353236/">
            <FaLinkedin className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
