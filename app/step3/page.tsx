'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar, { markStepComplete } from '@/app/components/ProgressBar';

export default function Step3Page() {
  const router = useRouter();

  useEffect(() => {
    markStepComplete(3);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-left">

        {/* Progress Bar */}
        <ProgressBar />

        <h1 className="text-3xl font-bold mb-4">🧠 Step 3: REIT vs Owning Property</h1>
        <p className="text-lg text-gray-700 mb-4">
          Should you buy a house or invest in REITs? Let's break it down.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>REITs are hands-off — no fixing toilets or dealing with tenants</li>
          <li>Buying property can bring control, but also more work and risk</li>
          <li>You’ll learn which one fits your money goals & lifestyle</li>
        </ul>
        <a
          href="/tools/quiz"
          className="inline-block px-5 py-3 bg-green-600 text-white rounded-full text-md hover:bg-green-700 transition"
        >
          ✅ Take the Lifestyle Match Quiz
        </a>

        <div className="mt-8 flex justify-between items-center">
          <button onClick={() => router.push('/step2')} className="text-blue-600 underline hover:text-blue-800">
            ← Back to Step 2
          </button>
          <button onClick={() => router.push('/step4')} className="px-5 py-3 bg-blue-600 text-white rounded-full text-md hover:bg-blue-700 transition">
            Next: Start for $10+ →
          </button>
        </div>
      </div>
    </div>
  );
}
