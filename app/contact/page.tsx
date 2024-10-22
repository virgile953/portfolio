// pages/contact.tsx
"use client"; // Mark this component as a client component

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setSuccessMessage('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
    } else {
      setErrorMessage('There was an error sending your message. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">Contact Me</h1>
        <p className="text-xl mt-4">
          I would love to hear from you! Please fill out the form below to get in touch.
        </p>
      </header>
      <Navbar />
      <section className="max-w-2xl w-full mb-12">
        <form onSubmit={handleSubmit} className="divblock shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded mt-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded mt-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded mt-2"
              rows={4}
            ></textarea>
          </div>
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          <Button type="submit">
          Send Message
          </Button>
        </form>
      </section>
    </div>
  );
}
