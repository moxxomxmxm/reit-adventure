'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ChapterPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">🗺️ Your REIT Adventure Map Awaits</h1>
        <p className="text-lg mb-6 text-gray-700">
          Think of this as your real estate gameboard. Each step = one fun, fast move closer to mastering REITs — without buying a house.
        </p>
        <button
          onClick={() => router.push('/step1')}
          className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
        >
          Start Step 1 Now
        </button>
      </div>

      {/* Teaser Section */}
      <div className="mt-16 text-center w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6">Here’s what you’ll unlock ⬇️</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl shadow text-left">
            <h3 className="text-xl font-semibold mb-2">📘 Step 1: What’s a REIT?</h3>
            <p className="text-sm text-gray-700 mb-2">You’ll learn what REITs are with simple examples.</p>
            <p className="text-green-600 text-sm">✅ Download: 1-page cheat sheet</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl shadow text-left">
            <h3 className="text-xl font-semibold mb-2">💸 Step 2: How You Make Money with REITs</h3>
            <p className="text-sm text-gray-700 mb-2">Learn how REITs grow your money — even while you sleep.</p>
            <p className="text-green-600 text-sm">✅ Calculator: “How much could I make?”</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl shadow text-left">
            <h3 className="text-xl font-semibold mb-2">🧠 Step 3: REIT vs Owning Property</h3>
            <p className="text-sm text-gray-700 mb-2">Understand the pros & cons of REITs vs buying a home.</p>
            <p className="text-green-600 text-sm">✅ Quiz: Which one fits your lifestyle?</p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-xl shadow text-left">
            <h3 className="text-xl font-semibold mb-2">📲 Step 4: How to Start Today (for $10+)</h3>
            <p className="text-sm text-gray-700 mb-2">Explore beginner-friendly platforms and get set up.</p>
            <p className="text-green-600 text-sm">✅ Download: App + tracker template</p>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-6 rounded-xl shadow text-left">
            <h3 className="text-xl font-semibold mb-2">🚀 Step 5: Build a Mini Portfolio</h3>
            <p className="text-sm text-gray-700 mb-2">Learn to mix REIT types and build a solid starter plan.</p>
            <p className="text-green-600 text-sm">✅ Tool: Starter plan builder</p>
          </div>

          {/* ✅ Step 6 Unlocked */}
          <Link href="/step6">
            <div className="bg-white p-6 rounded-xl shadow text-left hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">🎉 Step 6: You're Just Getting Started!</h3>
              <p className="text-sm text-gray-700 mb-2">
                Wrap up your journey, reflect on what you’ve learned, and discover where to go next.
              </p>
              <p className="text-green-600 text-sm">✅ Bonus: Toolbox + Community unlock</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
