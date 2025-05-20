'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ProgressBar, { markStepComplete } from '@/app/components/ProgressBar';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

export default function Step6Page() {
  const [width, height] = useWindowSize();

  useEffect(() => {
    markStepComplete(6);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-6 py-12 relative">
      {/* 🎉 Confetti Celebration */}
      <Confetti width={width} height={height} />

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full text-center z-10">

        {/* Progress Bar */}
        <ProgressBar />

        <h1 className="text-3xl font-bold mb-4">🎉 Step 6: You're Just Getting Started!</h1>
        <p className="text-lg mb-4 text-gray-700">
          You’ve completed the basics of REIT investing — and now, you’re ahead of 90% of people your age.
        </p>

        <ul className="text-left list-disc list-inside mb-6 text-gray-700">
          <li>You've learned what REITs are and how to use them</li>
          <li>You’ve built a mini investment plan 🧳</li>
          <li>Now it's time to grow with others and keep learning</li>
        </ul>

        <div className="flex justify-between items-center mt-6">
          <Link href="/step5" className="text-blue-600 hover:underline">
            ← Back to Step 5
          </Link>

          <Link href="/toolbox">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition">
              🧰 Go to Toolbox
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
