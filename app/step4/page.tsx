'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar, { markStepComplete } from '@/app/components/ProgressBar';

export default function Step4Page() {
  const router = useRouter();

  // ✅ Mark Step 4 as completed when this page loads
  useEffect(() => {
    markStepComplete(4);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-left">

        {/* Progress Bar */}
        <ProgressBar />

        <h1 className="text-3xl font-bold mb-4">📲 Step 4: How to Start Today (for $10+)</h1>
        <p className="text-lg text-gray-700 mb-4">
          You don’t need thousands to get started with REITs. In fact, some platforms let you invest with as little as $10!
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>We'll show you 2 beginner-friendly apps you can try</li>
          <li>You'll get a tracker to monitor what you invest</li>
          <li>It's simple, and you'll feel like a real investor by the end 🚀</li>
        </ul>
        <a
          href="/tools/tracker"
          className="inline-block px-5 py-3 bg-green-600 text-white rounded-full text-md hover:bg-green-700 transition"
        >
          ✅ Download the Tracker & App List
        </a>

        <div className="mt-8 flex justify-between items-center">
          <button onClick={() => router.push('/step3')} className="text-blue-600 underline hover:text-blue-800">
            ← Back to Step 3
          </button>
          <button onClick={() => router.push('/step5')} className="px-5 py-3 bg-blue-600 text-white rounded-full text-md hover:bg-blue-700 transition">
            Next: Build Your Mini Portfolio →
          </button>
        </div>
      </div>
    </div>
  );
}
