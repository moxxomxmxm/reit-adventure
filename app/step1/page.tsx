'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar, { markStepComplete } from '@/app/components/ProgressBar';

export default function Step1Page() {
  const router = useRouter();

  // Mark this step as completed when user visits this page
  useEffect(() => {
    markStepComplete(1);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">

        {/* Progress Bar */}
        <ProgressBar />

        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">📘 Step 1: What’s a REIT?</h1>
        <p className="text-gray-700 mb-6 text-lg">
          A REIT (Real Estate Investment Trust) lets you invest in real estate without owning physical property. Think of it like a stock — but for buildings.
        </p>

        {/* Example Box */}
        <div className="bg-blue-100 text-blue-900 p-4 rounded-lg mb-6">
          <p><strong>Example:</strong> A REIT might own apartments or malls. When they earn rent, you get a piece of the profit as a shareholder. 📈</p>
        </div>

        {/* Resource Download */}
        <div className="bg-green-100 text-green-900 p-4 rounded-lg mb-6">
          ✅ <a href="/tools/cheatsheet" className="underline font-medium">Download the 1-page cheat sheet</a> and save it for quick review.
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={() => router.push('/step2')}
            className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
          >
            Next: Step 2 →
          </button>
        </div>
      </div>
    </div>
  );
}
