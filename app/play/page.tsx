'use client';

import { Suspense } from 'react';
import PlayInner from './PlayInner';

export default function PlayPage() {
  return (
    <Suspense fallback={<div>Loading simulation...</div>}>
      <PlayInner />
    </Suspense>
  );
}
