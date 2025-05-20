'use client';

import { useState, useEffect } from 'react';

const TOTAL_STEPS = 6;

export default function ProgressBar() {
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('completedSteps');
      const value = saved ? Number(saved) : 0;
      if (!isNaN(value)) setCompletedSteps(value);
    }
  }, []);

  const progressPercent = Math.min(
    Math.round((completedSteps / TOTAL_STEPS) * 100),
    100
  );

  return (
    <div className="mb-4 w-full">
      <p className="text-sm font-semibold text-blue-600 mb-1">
        🎯 Progress: {progressPercent}%
      </p>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

export function markStepComplete(stepNumber: number) {
  if (typeof window !== 'undefined') {
    const current = Number(localStorage.getItem('completedSteps') || '0');
    const updated = Math.max(current, stepNumber);
    localStorage.setItem('completedSteps', updated.toString());
  }
}
