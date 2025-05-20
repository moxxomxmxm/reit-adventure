'use client';
import { useState, useEffect } from 'react';

const TOTAL_STEPS = 6;

export default function ProgressBar() {
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('completedSteps');
    if (saved) setCompletedSteps(Number(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('completedSteps', completedSteps.toString());
  }, [completedSteps]);

  const progressPercent = Math.round((completedSteps / TOTAL_STEPS) * 100);

  return (
    <div className="mb-4">
      <h2 className="text-sm font-semibold text-gray-600">🎯 Progress: {progressPercent}%</h2>
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
  const current = Number(localStorage.getItem('completedSteps') || '0');
  if (stepNumber > current) {
    localStorage.setItem('completedSteps', stepNumber.toString());
  }
}
