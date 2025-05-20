'use client';

import { usePathname } from 'next/navigation';

const TOTAL_STEPS = 6;

export default function ProgressBar() {
  const pathname = usePathname();

  const match = pathname.match(/\/step(\d+)/);
  const currentStep = match && !isNaN(Number(match[1])) ? parseInt(match[1], 10) : 0;

  const progressPercent = Math.min(
    Math.round((currentStep / TOTAL_STEPS) * 100),
    100
  );

  return (
    <div className="mb-4 w-full">
      <p className="text-sm font-semibold text-blue-600 mb-1">
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
