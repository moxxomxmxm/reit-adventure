'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar, { markStepComplete } from '@/app/components/ProgressBar';

export default function Step5Page() {
  const router = useRouter();

  // ✅ Mark this step as complete on page load
  useEffect(() => {
    markStepComplete(5);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-left">

        {/* Progress Bar */}
        <ProgressBar />

        <h1 className="text-3xl font-bold mb-4">🚀 Step 5: Build a Mini Portfolio</h1>
        <p className="text-lg text-gray-700 mb-4">
          It's time to put it all together. Build a beginner-friendly REIT portfolio that balances growth, safety, and income.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Mix REITs that focus on housing, healthcare, or offices</li>
          <li>Learn why diversification reduces risk</li>
          <li>Create a basic REIT plan you can actually stick to</li>
        </ul>
        <a
          href="/tools/portfolio"
          className="inline-block px-5 py-3 bg-green-600 text-white rounded-full text-md hover:bg-green-700 transition"
        >
          ✅ Try the Starter Portfolio Builder
        </a>

        <div className="mt-8 flex justify-between items-center">
          <button onClick={() => router.push('/step4')} className="text-blue-600 underline hover:text-blue-800">
            ← Back to Step 4
          </button>
          <button onClick={() => router.push('/step6')} className="px-5 py-3 bg-blue-600 text-white rounded-full text-md hover:bg-blue-700 transition">
            Finish: Community & Next Steps →
          </button>
        </div>
      </div>
    </div>
  );
}
