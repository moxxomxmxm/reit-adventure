'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar, { markStepComplete } from '@/app/components/ProgressBar';

export default function Step2Page() {
  const router = useRouter();

  // Mark this step as complete when the page loads
  useEffect(() => {
    markStepComplete(2);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-left">

        {/* Progress Bar */}
        <ProgressBar />

        <h1 className="text-3xl font-bold mb-4">💸 Step 2: How You Make Money with REITs</h1>
        <p className="text-lg text-gray-700 mb-4">
          REITs make you money mainly in two ways: <strong>dividends</strong> (regular cash payments) and <strong>value growth</strong> (the price of the REIT goes up).
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>You earn money while doing nothing (passive income)</li>
          <li>You can reinvest to grow even more</li>
          <li>Some REITs pay monthly, others quarterly</li>
        </ul>
        <a
          href="/tools/calculator"
          className="inline-block px-5 py-3 bg-green-600 text-white rounded-full text-md hover:bg-green-700 transition"
        >
          ✅ Try the REIT Profit Calculator
        </a>

        <div className="mt-8 flex justify-between items-center">
          <button onClick={() => router.push('/step1')} className="text-blue-600 underline hover:text-blue-800">
            ← Back to Step 1
          </button>
          <button onClick={() => router.push('/step3')} className="px-5 py-3 bg-blue-600 text-white rounded-full text-md hover:bg-blue-700 transition">
            Next: REIT vs Owning Property →
          </button>
        </div>
      </div>
    </div>
  );
}
