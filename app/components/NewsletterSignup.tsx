'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  return (
    <div className="mt-4 w-full flex flex-col items-center">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-200"
        >
          📨 Join the Newsletter
        </button>
      ) : !submitted ? (
        <form onSubmit={handleSubmit} className="mt-4 w-full flex flex-col items-center gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded border border-gray-300 w-full max-w-xs"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-medium"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className="text-green-700 mt-4 font-medium">✅ You're subscribed!</p>
      )}
    </div>
  );
}
