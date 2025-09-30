"use client";

import React, { useState, useCallback } from "react";
import InputField from "./Form/InputField";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, email, message } = formData;

    const res = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      alert("✅ Message sent!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("❌ " + data.error);
    }
  }

  return (
    <section id="contact" className="contacts-section">
      <div className="form-container">
        <div className="form-card">
          <h2 className="form-heading">Contact Us</h2>
          <form onSubmit={handleSubmit} className="form-content">
            <InputField
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Message"
              id="message"
              name="message"
              isTextArea
              rows={4}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
