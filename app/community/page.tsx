'use client';

import Link from 'next/link';
import NewsletterSignup from '../components/NewsletterSignup';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">🤝 Join the Community</h1>
        <p className="text-lg text-gray-700 mb-6">
          Have questions? Want to meet others learning about REITs? Join us or reach out!
        </p>

        <div className="space-y-4">
          <a
            href="https://discord.gg/EG3YjB3Dyd" // replace with your actual invite
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-200"
          >
            💬 Join our Discord Server
          </a>
        </div>

        {/* Email signup component (interactive form) */}
        <NewsletterSignup />

        <p className="text-sm text-gray-500 mt-6">
          Get weekly REIT tips, tools, and investor insights — straight to your inbox.
        </p>
      </div>
    </div>
  );
}
