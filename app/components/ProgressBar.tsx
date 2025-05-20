'use client';

import { useState, useEffect } from 'react';

const TOTAL_STEPS = 6;

export default function ProgressBar() {
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    // ✅ Safe: Only run on the browser
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('completedSteps');
      if (saved) setCompletedSteps(Number(saved));
    }
  }, []);

  const progressPercent = Math.min(
    Math.round((completedSteps / TOTAL_STEPS) * 100),
    100
  );

  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-pink-600 mb-1">
        🎯 Progress: {progressPercent}%
      </p>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

// ✅ Safe for Vercel: Only run in the browser
export function markStepComplete(stepNumber: number) {
  if (typeof window !== 'undefined') {
    const current = Number(localStorage.getItem('completedSteps') || '0');
    if (stepNumber > current) {
      localStorage.setItem('completedSteps', stepNumber.toString());
    }
  }
}
