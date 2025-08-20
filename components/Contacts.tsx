'use client'

import React from "react";
import InputField from "./Form/InputField";

const Contacts = () => {
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData =  new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const res = await fetch("/api/form", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, message})
    })

    const data = await res.json()
    console.log(data)

    if (res.ok) {
      alert("✅ Message sent!");
      form.reset();
    } else {
      alert("❌ " + data.error);
    }
  }

  return (
    <section id="contact" className='contacts-section'>
      <div className='form-container'>
        <div className='form-card'>
          <h2 className='form-heading'>Contact Us</h2>
          <form onSubmit={handleSubmit} className='form-content'>
            <InputField 
              label="Name"
              id="name"
              type="text"
              placeholder="Your name"
            />

            <InputField 
              label="Email"
              id="email"
              type="email"
              placeholder="Your email"
            />

            <InputField 
              label="Message"
              id="message"
              isTextArea
              rows={4}
              placeholder="Your message"
            />

            <button 
              type='submit'
              className='form-button'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
