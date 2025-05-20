'use client';

import { useRouter } from 'next/navigation';

export default function IntroQuestPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/choose-reit');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-4">🌟 Welcome to Your REI Quest!</h1>
        <p className="text-lg mb-6">
          This isn’t just learning. It’s a journey. You’ll unlock levels, build your mindset, grow money skills, and become a Real Estate Investor.
        </p>

        <button
          onClick={handleNext}
          className="px-6 py-3 bg-green-600 text-white rounded-full text-lg hover:bg-green-700 transition"
        >
          Start Your Journey →
        </button>
      </div>
    </div>
  );
}
