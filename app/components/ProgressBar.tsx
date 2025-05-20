'use client';

import { useState, useEffect } from 'react';

const TOTAL_STEPS = 6;

export default function ProgressBar() {
  const [completedSteps, setCompletedSteps] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('completedSteps');
      setCompletedSteps(saved ? Number(saved) : 0);
    }
  }, []);

  if (completedSteps === null) return null; // avoid rendering until ready

  const progressPercent = Math.round((completedSteps / TOTAL_STEPS) * 100);

  return (
    <div className="mb-4">
      <h2 className="text-sm font-semibold text-blue-600">🎯 Progress: {progressPercent}%</h2>
      <div className="w-full h-2 bg-gray-300 rounded">
        <div
          className="h-2 bg-blue-600 rounded transition-all"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
}

export function markStepComplete(stepNumber: number) {
  if (typeof window !== 'undefined') {
    const current = Number(localStorage.getItem('completedSteps') || '0');
    if (stepNumber > current) {
      localStorage.setItem('completedSteps', stepNumber.toString());
    }
  }
}
